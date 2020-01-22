let password = prompt("Введите PIN", "4 или 6 цифр")

function PIN(){
if ((password.length == 4 || password.length == 6) && parseInt(password)){
    alert(true)
    
}
else{
    alert(false)
}
}
PIN();