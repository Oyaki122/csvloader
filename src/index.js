import csvLoader from './csvLoader'

const csvFrames = document.getElementsByClassName('csv')
for (let j = 0; j < csvFrames.length; j++) {
  const fileName = csvFrames[j].dataset.filename
  // csvLoadManager(fileName, csvFrames[i])
  fetch(fileName)
    .then(function (res) {
      return res.text()
    })
    .then(function (csv) {
      const csvFrame = csvFrames[j]
      const dataObjs = csvLoader(csv)
      for (let i = 0; i < dataObjs.length; i++) {
        const sectionElement = document.createElement('section')
        sectionElement.innerHTML = `
        <img src="${dataObjs[i].img || 'img/noData.png'}" alt="">
        <h3 class="csv-title">${dataObjs[i].title || 'noData'}</h3>
        <h4 class="csv-name">${dataObjs[i].name || 'noData'}</h4>
        <p class="csv-description">${dataObjs[i].description || 'noData'}</p>
        <article class="csv-article">${dataObjs[i].article ||
          'noData'}</article>`
        csvFrame.appendChild(sectionElement)
      }
    })
}
