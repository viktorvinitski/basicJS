let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O",'react', 'react', 'react', 'js', 'js']

  function unique(){
    let uniqueElement = new Set(strings)
    return [...uniqueElement]
}

console.log(unique(strings))