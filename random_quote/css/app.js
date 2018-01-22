$(document).ready(function(){
    getQuote();
    let randomQuote,author;
    function getQuote(){
            // const quotes = ["Hello, Worlds","Hello ,Human", "Hello Kids"];
            // const author = ["--Naufaldi","--Rafif","Satriya"];
            //  randomNum =Math.floor((Math.random()*quotes.length));
            //  randomQuote = quotes[randomNum];
            // randomAuthor = author[randomNum];
            const url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
            $.getJSON(url, function(data){
               
                $(".quotes").html(data.quoteText);
                $(".author").html(data.quoteAuthor);
                randomQuote = data.quoteText;
                author = data.quoteAuthor;
            });

        }

        $("#quote").on("click",function(){
            getQuote();
        });
     
        $("#tweet").on("click",function(){
            window.open("https://twitter.com/intent/tweet?text="+randomQuote+" by "+author);
        });
    


});