let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ]

  function sortByField(field){
     return (a, b) => a[field] > b[field] ? 1 : -1

  }

  console.log(users.sort(sortByField('age')))