
function palindrome(str) {
  // Good luck!
  var a = str.split();
  a.reverse();
  var str1 = a.join(" ");
  if (str1.equals(str)){
      return true;
  }else {
      return false;
  }

}



palindrome("eye");
