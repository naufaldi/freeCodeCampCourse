var oldArray = [ 1,2,3];
var timesFour = oldArray.map(function(val){
    return val * 4;
});
console.log(timesFour); //returns [4,8,12]
console.log(oldArray); // returns [1,2,3]