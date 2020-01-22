let firstString = prompt("asdasd")
let newString = firstString
.split('')
.map((item,index) => item.toUpperCase() )
.reduce((current,next,index) => current + '-' + next + next.repeat(index).toLowerCase())


console.log(newString)






// let mainString = 
//     newString[0].toUpperCase() + "-" +
//     newString[1].toUpperCase() + newString[1].repeat(1).toLowerCase() + '-' +
//     newString[2].toUpperCase() + newString[2].repeat(2).toLowerCase() + '-' + 
//     newString[3].toUpperCase() + newString[3].repeat(3).toLowerCase() + '-' +
//     newString[4].toUpperCase() + newString[4].repeat(4).toLowerCase() + '-' +
//     newString[5].toUpperCase() + newString[5].repeat(5).toLowerCase() + '-' +
//     newString[6].toUpperCase() + newString[6].repeat(6).toLowerCase() 
// alert(mainString)



//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"




