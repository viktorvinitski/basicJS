let arrString = ['html', 'css', 'javascript','git','react','angular','vue']

function copySorted(){
    let sorted = arrString.slice().sort()
    return sorted
}
console.log(copySorted(arrString))
