//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []

let forInvert = [1,-2,3,-4,5]


function invert(a){
    let b = a.map((b) => b*-1)
    return b
}
console.log(invert(forInvert))