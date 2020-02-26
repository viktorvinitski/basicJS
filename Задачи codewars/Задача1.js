//ffindNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])




let strings = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']

  function ffindNeedle(arr){
    let a = arr
    return 'found the needle at position ' + a.indexOf("needle")
    
  }
    
    
    


console.log(ffindNeedle(strings))