export default function (csv) {
  const replaced = csv.replace(/"|\\|￥/g, '')
  const row = replaced.split(/\r\n|\n|\r/)
  let data2D = []
  for (let i = 0; i < row.length; i++) {
    data2D[i] = row[i].split(',')
  }
  for (let i = 0; i < data2D.length; i++) {
    if (data2D[i].length <= 1 && data2D[i][0] === '') {
      data2D.splice(i, 1)
    }
  }
  const title = data2D.shift()
  let dataObject = []
  for (let i = 0; i < data2D.length; i++) {
    dataObject[i] = {}
    for (let j = 0; j < title.length; j++) {
      dataObject[i][title[j]] = data2D[i][j]
    }
  }
  return dataObject
}
