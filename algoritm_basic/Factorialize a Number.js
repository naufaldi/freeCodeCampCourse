
function factorialize(num) {
 
    var total =1;
  
  for (var i = 1; i <= num ; i++){
   
    total = i * total; 
  }
  return total;
}

factorialize(5);
