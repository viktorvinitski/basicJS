function calc(a,b,operator){
    let method = {
        'substract': ((a,b) => a - b),
        'add': ((a,b) => a + b),
        'divide': ((a,b) => a / b),
        'multiply': ((a,b) => a * b)
    }
    return method[operator](a,b)
}
console.log(calc(18,2, 'add'))