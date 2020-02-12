let dima = { name: "Дима", age: 25 };
let sasha = { name: "Саша", age: 30 };
let egor = { name: "Егор", age: 36 };

let arr = [ dima, sasha, egor ]

function sortByAge(){
    let sortByAge = arr.sort((a,b) => a.age-b.age)
    return sortByAge
}
console.log(sortByAge(arr))