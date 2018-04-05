//beginner

function whatIsInAName(collection, source){
     // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srckeys = Object.keys(source);

  //filter the collection
  return collection.filter(function(obj){
      for ( var i =0; i < srckeys.length; i++){
          if( !obj.hasOwnProperty(srckeys[i]) || obj[srckeys[i]] !== source[srckeys[i]] ){
              return false;
          }
      }
      return true;
  });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//intermediate

function whatIsInAName2(collection, source){
     // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);
  return collection.filter(function(obj){
      return srcKeys.every(function(key){
          return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
  });
}

// test here
whatIsInAName2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });