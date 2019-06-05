import csvLoader from './csvLoader'

const csvFrames = document.getElementsByClassName('csv')
for (let i = 0; i < csvFrames.length; i++) {
  const fileName = csvFrames[i].dataset.filename
  csvLoadManager(fileName, csvFrames[i])
}

async function csvLoadManager (fileName, csvFrame) {
  const csvFile = await (await fetch(fileName)).text()
  const dataObjs = csvLoader(csvFile)
  for (let i = 0; i < dataObjs.length; i++) {
    const sectionElement = document.createElement('section')
    sectionElement.innerHTML = `
      <img src="${dataObjs[i].img || 'img/noData.png'}" alt="">
      <h3 class="csv-title">${dataObjs[i].title || 'noData'}</h3>
      <h4 class="csv-name">${dataObjs[i].name || 'noData'}</h4>
      <p class="csv-description">${dataObjs[i].description || 'noData'}</p>
      <article class="csv-article">${dataObjs[i].article || 'noData'}</article>`
    csvFrame.appendChild(sectionElement)
  }
}
