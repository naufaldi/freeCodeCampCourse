
function pairElement(str) {
    var paired = [];
    //function for stand for pair
    var search = function(char){
        switch(char){
            case 'A':
            paired.push(['A','T']);
            break;
            case 'T':
            paired.push(['T', 'A']);
            break;
            case 'C':
            paired.push(['C','G']);
            break;
            case 'G':
            paired.push(['G', 'C']);
            break;
        }
    };
    //loops through the input and pair
    for (var i =0 ; i < str.length; i++){
        search(str[i]);
    }
    return str;
  }
  
  pairElement("GCG");
  
  //other answer
  function pair(str){
      str = str.toUpperCase();
      str = str.split("");
      var placeHolderArray =[];
      for (var i =0; i<str.length ; i++){
        if(str[i]=="G"){
            placeHolderArray.push(["G","C"]);
        } else if (str[i]=="C"){
            placeHolderArray.push(["C","G"]);
        } else if (str[i]=="A"){
            placeHolderArray.push(["A","T"]);
        } else if(str[i]=="T"){
            placeHolderArray.push(["T"],"A");
        }
      }
      return placeHolderArray;
  }

  pair("GCG");