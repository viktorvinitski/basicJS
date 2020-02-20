let str = 'какая-то строка для массива'

function simple(){
    let sortedString = str
    .split(' ')
    .sort((a,b) => a.length - b.length)


    return sortedString[0].length
}

console.log(simple(str))