$(document).ready(function(){
    const api = 'http://api.openweathermap.org/data/2.5/forecast?id=1636722&APPID=c371e021c543f1eb6ed363f9506e20f6';
    // console.log("hello");
    $.getJSON(api,function(data){
        console.log(data.coord.long);
    });
   });