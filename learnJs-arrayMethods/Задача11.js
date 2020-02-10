let zhenya = { name: "Женя", age: 25 };
let vova = { name: "Вова", age: 30 };
let marina = { name: "Марина", age: 29 };

let arRay = [ zhenya, vova, marina ];

let a = arRay.reduce((prevValue,currentValue) => prevValue + currentValue.age, 0)/arRay.length
console.log(a)