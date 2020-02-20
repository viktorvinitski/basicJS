let a = prompt("Что вы думаете по этому поводу?")

function replacer(){
a = a.replace(/а|о|и|е|ё|э|ы|ю|я/g, "")
return a
}

console.log(replacer(a))