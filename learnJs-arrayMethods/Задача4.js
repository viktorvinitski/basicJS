let numbers = [5,8,7,1,4,2,3,9,5,7,29,100,4564,10,12,14]

function decrease(){
    let sortedNumbers = numbers.sort((a,b) => b - a)
    return sortedNumbers
}

console.log(decrease(numbers))