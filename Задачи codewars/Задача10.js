let camelStr = "camelCasing"


function camStr(string){
    let indexOfUpperCase = string.indexOf(string.match(/[A-Z]/g))
    let newCam = string
    .split('')  
    let removedNewCam = newCam
    .splice(indexOfUpperCase,0," ")
    return newCam.join('')

}

console.log(camStr(camelStr))