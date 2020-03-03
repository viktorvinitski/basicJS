let arrOfNum = [2,3,4,5,6,7,1]

function removeSmallest(arrr){
  let min = Math.min(...arrr)
  return arrr.filter((a) => a != min) 
}

console.log(removeSmallest(arrOfNum))