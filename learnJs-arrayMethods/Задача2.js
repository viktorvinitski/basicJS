let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function filterRange(array, a, b){
    let result = array.filter(arr => arr > a && arr < b)
    return result
    
    

}

console.log(filterRange(array, 3, 9))


