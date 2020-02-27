//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55


let strings = [ 0, 0, 0.55, 0, 0 ]

function stray(numbers) {
  var sort = numbers.sort();
  if (sort[0] === sort[1]) {
    return sort[sort.length-1]
  }  else {
    return sort[0]
  }
    
  }
console.log(stray(strings))