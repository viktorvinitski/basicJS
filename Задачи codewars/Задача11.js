let arraY = 'racecar'

function palindrom(str){

let newStr = str.toLowerCase().split('').reverse().join('')
let newStr2 = str.toLowerCase()

if (newStr === newStr2) {
return true
}
else { 
return false
}
}
console.log(palindrom(arraY))