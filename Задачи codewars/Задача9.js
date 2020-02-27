//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

let revStr = "This is an example! double  spaces"

function reverseStr(someStr){
   let newStr = someStr.split(' ').reverse()
   .map((item) => item.split('').reverse().join())
   .map((item2) => item2.replace(/,/g, "")).reverse().join(' ')
   
   return newStr
}

console.log(reverseStr(revStr))