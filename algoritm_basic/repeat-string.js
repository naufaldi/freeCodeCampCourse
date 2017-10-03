
function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatString = "";
  while(num > 0){
    repeatString += str;
    num--;
  }
  return repeatString;
}

repeatStringNumTimes("abc", 3);
