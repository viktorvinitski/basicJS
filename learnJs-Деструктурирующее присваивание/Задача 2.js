let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  }

  function sortingValues(){
    let maxValue = Object.values(salaries).sort((a,b) => b-a)
    return maxValue[0]
  }

  console.log(sortingValues(salaries))