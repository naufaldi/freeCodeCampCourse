
function reverseString(str) {
  var a = str.split("");
  a.reverse();
  var str1 = a.join('');
  return str1;
}

reverseString("hello");
