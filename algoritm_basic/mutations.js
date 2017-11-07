function mutation(arr){
    for (var i=0; i< arr[1].length; i++){
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1){
            return false;
        }
    }
    return true;
}


mutation(["hello","hey"]);

/* One way to tackle this challenge is to split the first and second words up 
with the split method, but I think that it’s unnecessary in this instance, 
when both words can be selected directly out of the array.*/
