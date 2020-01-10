let password = prompt("Введите PIN", "4 или 6 цифр")
if (password.length == 4 || password.length == 6){
    alert(true)
}
else{
    alert(false)
}