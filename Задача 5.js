

function PIN(password){
if ((password.length == 4 || password.length == 6) && parseInt(password)){
    return true
}
else{
    return false
}
}
PIN("123456");