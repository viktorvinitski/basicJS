//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"





let string = 'is2 Thi1s T4est 3a'

function order(words){
    let wordsArr = words.split(" ");
    let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let result = [];
    for(let i = 0; i < numArr.length; i++) {
    for(let j = 0; j < wordsArr.length; j++) {
    if(wordsArr[j].includes(numArr[i])){
    result.push(wordsArr[j]);
    }
    }
    }
    return result.join(" ");
    }
console.log(order(string))





function sortStr(str){
    let newStr = str
    .split(' ')
    .map(item => item.split('').sort().join(''))
    .sort((a,b) => a[0] - b[0])
    .join(' ')
    


    return newStr

    
}

console.log(sortStr(string))