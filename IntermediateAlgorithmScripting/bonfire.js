function fearNotLetter(str){
    //deklarasi hrufu alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    //split huruf jdi tiap hruuf aja
    alphabet = alphabet.split("");
    //inputan di split
    str = str.split("");
    //klo misal index 0 tdk sama dgn a , maka return undefined
    if(str[0]!="a"){
        return undefined;
    }
    // klo cek mulai dari array index 0 tdk sama dgn alphabet maka return alphabet
    for(var i =0; i < str.length; i++){
        if(str[i] != alphabet[i]){
            return alphabet[i];
        }
    }
    return str;
}

fearNotLetter("abcde");

// another cara lagi
function fearNotLetter2(str ){
    var code = str.charCodeAt(i);
for (var i =0; i < str.length ; i++){
    if (code !== str.charCodeAt(0)+ i){
        return String.fromCharCode(code -1 );
    }
}
return undefined;


    
}

fearNotLetter2("abcde");


