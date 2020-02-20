let numbers = [5,8,7,1,4,2,3,9,5,7,29,100,135,10,12,14]

function minNumber(){
    let num = numbers
    .sort((a,b) => a-b)
    return num[0]
}

console.log(minNumber(numbers))