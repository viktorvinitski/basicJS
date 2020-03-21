function inArray(someArr){
    let arr = [1,2,3,4,5,6,7]
    return arr.filter(item => someArr.indexOf(item)!==-1)
}
console.log(inArray([2,3,4]))





function inBetween(start,finish){
    let arr2 = [1,2,3,4,5,6,7]
    return arr2.filter(item2 => item2>=start && item2<=finish)
}
console.log(inBetween(2,6))
