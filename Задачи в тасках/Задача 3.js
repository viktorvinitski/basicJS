let list = '4,5,29,54,4,0,-123,666,-64,1,-3,6,-6'

function forList(){

   let numbers = list
   .split(',')
   .sort((a,b) => b - a)
   return numbers.shift() + numbers.pop()

   
}

console.log(forList(list))
