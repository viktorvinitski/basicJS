let vitya = { name: "Витя", surname: "Пупкин", id: 1 };
let katya = { name: "Катя", surname: "Иванова", id: 2 };
let andrei = { name: "Андрей", surname: "Петров", id: 3 };

let persons = [ vitya, katya, andrei ];

function transformToObjects(){
    let personsMapped = persons.map(person => ({
    fullname: `${person.name} ${person.surname}`,
    id: person.id
}))
    return personsMapped
}
console.log(transformToObjects(persons))





