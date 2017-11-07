
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function (a,b){
      return a-b;
    });
    for ( var a=0; a < arr.length;a++){
      if(arr[a] >= num)
        return a;
    }
    return arr.length;
  }
  
  getIndexToIns([2, 5, 10], 15);
  

  //or use this 


function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
   arr.push(num);
    arr.sort(function(a,b){
      return a -b;
    });
    return arr.indexOf(num);
  }
  
  getIndexToIns([2, 5, 10], 15);
  