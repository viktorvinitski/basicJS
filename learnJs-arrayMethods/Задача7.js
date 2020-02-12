let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];

function transformToNames(){
    let names = users.map(users => users.name)
    return names
}
console.log(transformToNames(users))