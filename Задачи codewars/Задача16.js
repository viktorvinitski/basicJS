let nums = [1,2,4,6,8,8]

function minValue(nuM){
let newNum = nuM.filter((value,index) => nuM.indexOf(value) === index)
.sort((a,b) => a-b)
.join('')
return parseInt(newNum)
}

console.log(minValue(nums))