let arrr = [1, 2, 3,4,5,6,7,8,9,10]

function shuffle(){
    let shuffled = arrr.sort(() => 0.5 - Math.random())
    return shuffled
}

console.log(shuffle(arr))