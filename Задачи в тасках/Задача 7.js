let jadonComment = prompt()

function jadonSmith(){
let comment = jadonComment
.split(' ')
.map((item) => item[0].toUpperCase() + item.slice(1))
.join(' ')

return comment
}

console.log(jadonSmith(jadonComment))