
function findLongestWord(str) {
  var arraytoString = str.split(" ");
  //take string and converst to array
  var maxlength = 0;
  //Declare a variable to keep track of the maximum length and 
  //loop from 0 to the length of the array of words.
  for (var i = 1; i < arraytoString.length;i++) {
      //Then check for the longest word by comparing the current word 
      //to the previous one and storing the new longest word.
    if (arraytoString[i].length > maxlength ) {
      maxlength = arraytoString[i].length;
    }
  }
//At the end of the loop just return the number value of the variable maxLength.
  return maxlength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
