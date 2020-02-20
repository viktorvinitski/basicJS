let firstSquare = prompt("Введите площадь квадрата")

function findNextSquare(){
let nextSquare = (Math.sqrt(firstSquare) + 1) ** 2
let checkingSquare = Math.sqrt(nextSquare)
if(Number.isInteger(checkingSquare)){
    return nextSquare
}
else{
    return -1
}
}

console.log(findNextSquare())
