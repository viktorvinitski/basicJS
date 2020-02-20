let string = 'assssaabbbcdrrrrrssstttuuuwwxxyyyzzz'


function printerError(){
let wrongLetters = string
.match(/n|o|p|q|r|s|t|u|v|w|x|y|z/g)
let coeff = wrongLetters.length / string.split('').length
return coeff

}

console.log(printerError(string))