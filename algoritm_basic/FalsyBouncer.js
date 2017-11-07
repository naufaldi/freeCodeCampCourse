function bouncer(arr){
    return arr.filter(Boolean);
}

bouncer([7,"ate","",false,9]);

function bouncer(arr) {
    
       function truthy(value) {
          //only return the given value if it evaluates as true. 
          //For example, 2, "string", true, will all return, but false, NaN, -1 will not.
    
          return value;
       }
    
       var filtered = arr.filter(truthy);
          //This is filtering only the values that evaluate as true in the given array (following the truthy function give above)
    
          return filtered;
     }
    
     //The function is now run with a given array, returning only the values that evaluate as true
    
     bouncer([7, "ate", "", false, 9]);

     