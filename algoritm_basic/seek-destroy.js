
function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments);
    for ( var i =0; i <arr.length;i++){
      for (var j=0;j < arr.length;j++){
        if (arr[i] === args[j]){
          delete arr[i];
        }
      }
    }
    return arr.filter(Boolean);
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  


  function destroyer2 (arr){
      var args= Array.from(arguments).slice(1);
      return arr.filter(function(val){
          return !args .include(val); 
      });
  }