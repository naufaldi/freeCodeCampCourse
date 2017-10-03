function confirmEnding(string,target){
    // Step 1. Use the substr method

    if ( string.subtr(-target.length) == target){
        // What does "if (string.substr(-target.length) === target)" represents?
  // The string is 'Bastian' and the target is 'n' 
  // target.length = 1 so -target.length = -1
  // if ('Bastian'.substr(-1) === 'n')
  // if ('n' === 'n')
  
  // Step 2. Return a boolean (true or false)
  return true;
    } else {
        return false;
    }
}

confirmEnding('Bastian','n');


function confirmEnding2(string2, target2) {
    // We return the method with the target as a parameter
    // The result will be a boolean (true/false)
    return string.endsWith(target2); // 'Bastian'.endsWith('n')
  }
  confirmEnding('Bastian', 'n');