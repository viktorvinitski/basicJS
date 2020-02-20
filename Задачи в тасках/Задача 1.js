let firstSquare = prompt("Введите площадь квадрата")
let sideSquare = Math.sqrt(firstSquare)
let nextSquare = (sideSquare + 1) ** 2
let checkingSquare = Math.sqrt(nextSquare)
if(Number.isInteger(checkingSquare)){
    alert(nextSquare)
}
else{
    alert(-1)
}


