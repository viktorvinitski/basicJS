let a = prompt("Что вы думаете по этому поводу?")
a = a.replace(/а|о|и|е|ё|э|ы|ю|я/g, "")
document.write(a)