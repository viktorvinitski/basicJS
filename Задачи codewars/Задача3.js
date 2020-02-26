//arrayDiff([1,2],[1]) == [2]
//arrayDiff([1,2,2,2,3],[2]) == [1,3]


let arrDif = [1,2]
let arrDif2 = [1]

function arrayDiff(a,b){
   return a = a.filter(x => b.indexOf(x) == -1)
}
console.log(arrayDiff(arrDif,arrDif2))