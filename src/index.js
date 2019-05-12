const replaced = csv.replace(/"|\\|￥/g, '')
const row = replaced.split(/\r\n|\n|\r/)
let data = []
for (let i = 0; i < row.length; i++) {
  data[i] = row[i].split(',')
}
