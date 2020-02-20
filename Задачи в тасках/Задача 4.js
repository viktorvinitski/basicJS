let firstString = prompt("asdasd")

function accum(){
let newString = firstString
.split('')
.map((item,index) => item.toUpperCase() )
.reduce((current,next,index) => current + '-' + next + next.repeat(index).toLowerCase())
return newString
}

console.log(accum(firstString))










