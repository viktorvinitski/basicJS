let num = [56,58,64,86,42]
function sumTwoSmallestNumbers(numbers) {  
    let number = numbers
    .sort((a,b) => a-b)
    return number[0] + number[1]
  }
console.log(sumTwoSmallestNumbers(num))
