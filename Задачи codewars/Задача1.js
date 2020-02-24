//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55


let strings = [1, 1, 1, 2, 1, 1]

  function unique(arr){
    let uniqueElement = new Set(arr)
    return [...uniqueElement]
}

console.log(unique(strings))