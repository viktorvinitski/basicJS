let arrOfStr = ["Telescopes", "Glasses", "Eyes", "Monocles"]

function fromShortToLong(someStr){
   return someStr.sort((a,b) => a.length - b.length)

}
console.log(fromShortToLong(arrOfStr))