let password = prompt("Введите PIN", "4 или 6 цифр")

function PIN(password){
if ((password.length == 4 || password.length == 6) && parseInt(password)){
    return true
}
else{
    return false
}
}
PIN();