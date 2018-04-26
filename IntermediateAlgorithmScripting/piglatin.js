function translatePigLatin(str){
    //split string menjdi arr
    var letters = str.split("");
    //inisiasi utk string dgn huruf konsonan
    var vowelRegex = /[aeiou]/;
    //jika array index 0 cocok dgn aiueo maka
    if(vowelRegex.test(letters[0])){
        //join dgn way
        return letters.join("") + "way";
    }
    //tapi jika 
    while(true){
    
        if(!vowelRegex.test(letters[0])){
            //pindah index 0 bakal dipindah ke terakhir krn push
            letters.push(letters.splice(0,1));
        }
        else{
            break;
        }
    }
    //lalu di joinkan smua
    str = letters.join("") + "ay";

    return str;
}


translatePigLatin("consonant");