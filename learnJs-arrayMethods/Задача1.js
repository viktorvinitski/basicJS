let str = "my-short-string"
let cutStr = str
.split("-")
.map((item,index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1))
.join('')

console.log(cutStr)