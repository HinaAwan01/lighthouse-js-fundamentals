const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 


function finalPosition (moves) {
  // Your code in here ...
  const positionArr= [];
  let x=0; let y =0;
  for(const move of moves){
    
    if(move === 'north'){
      
      
      
      y = y + 1;
      //console.log(y);
      
    }
    
    else if(move === 'west'){
      
      x = x - 1;
    }
    
    else if(move === 'east'){
      
      x = x + 1;
    }
  }
  
  positionArr.push(x);
  positionArr.push(y);
  
  console.log(positionArr);
}

finalPosition(moves);