let firstString = prompt("asdasd")
let newString = firstString
.split('')
.map((item,index) => item.toUpperCase() )
.reduce((current,next,index) => current + '-' + next + next.repeat(index).toLowerCase())


console.log(newString)










