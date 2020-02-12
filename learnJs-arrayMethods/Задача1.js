let str = "my-short-string"

function camelize(){

let cutStr = str
.split("-")
.map((item,index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1))
.join('')
return cutStr

}
console.log(camelize(str))
