let friendsNames = ['Витя', 'Катя','Костя','Никита','Дима']

function filterFriends(strFr){
  let friends = strFr.map((a) => {
      if (a.length === 4) {
      return a }})
 return friends.filter((x) => x !== undefined)
 
  
}

console.log(filterFriends(friendsNames))