console.log("Uno is here!"); 


let colorArray= ["red", "green", "blue", "yellow"],
    cardDeck =new Array(),
    shuffledCardDeck =new Array(),
    //perviouslyUsedIndexes =new array(),
    oneThruNine =new Array(10).fill(null);

let UnoCard=function( num, colour, CardValue, effecto){
    this.id=num,
    this.color=colour,
    this.number=CardValue,
    this.special=effecto
};  
let num=0; 


colorArray.forEach(function(color) {
    for (let number in oneThruNine){
        cardValue=parseInt(number); 
        //let newNumberCard= new UnoCard(color, cardValue, null); 
        if (cardValue===0){
            //let newActionCard= new UnoCard(color, null, "DrawTwoCards");
                cardDeck.push(new UnoCard(num++, color, null, "DrawTwoCards"));//newActionCard
                cardDeck.push(new UnoCard(num++, color, null, "DrawTwoCards"));//newActionCard
               // newActionCard= new UnoCard(color, null, "ReverseCards");
                cardDeck.push(new UnoCard(num++,color, null, "ReverseCards"));//newActionCard
                cardDeck.push(new UnoCard(num++,color, null, "ReverseCards"));//newActionCard
                //newActionCard= new UnoCard(color, null, "SkipCards");
                cardDeck.push(new UnoCard(num++, color, null, "SkipCards"));//newActionCard
                cardDeck.push(new UnoCard(num++, color, null, "SkipCards"));//newActionCard
                cardDeck.push(new UnoCard(num++, color, cardValue, null) );//newNumberCard
        }
        else{
                cardDeck.push(new UnoCard(num++,color, cardValue, null) );//newNumberCard
                cardDeck.push(new UnoCard(num++,color, cardValue, null) );//newNumberCard
        }           
    }
    //let newWildCard= new UnoCard(null, null, "Wild"); 
    //let newDrawFourCard= new UnoCard(null, null, "DrawFour"); 
        cardDeck.push(new UnoCard(num++, null, null, "Wild"));//newActionCard
        cardDeck.push(new UnoCard(num++, null, null, "DrawFour"));//newActionCard
});  

/*
8 Draw Two cards – 2 each in blue, green, red, and yellow
8 Reverse cards – 2 each in blue, green, red, and yellow
8 Skip cards – 2 each in blue, green, red, and yellow  

how to target src using jquery
     */


//console.log (cardDeck); 
console.log (cardDeck.length); 


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;  //The maximum is inclusive and the minimum is inclusive 
}

/*
let x=0; 


var shuffledDeck = cardDeck.map(function(obj){
    var shuffleCard = {};
    shuffleCard=obj;
    shuffleCard.id=x;
     x++;  
    return shuffleCard; 
    
}

);*/
/*
var reformattedArray = kvArray.map(function(obj) { 
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});*/


var counter=0; 

//var shuffledDeck =function(index){
var checkMatch= function(key){

  //console.log (key.id + "hi");
  for (index in shuffledCardDeck){
      if (typeof shuffledCardDeck[index]!=='undefined'){
if (shuffledCardDeck[index].id===key.id){
      return true;
    }
      }
    
    
  }  
  return false; 
}

//checkMatch(shuffledcard[0]);


//
   /*
for (let card=0; card<cardDeck.length; card++){
   
    //cardDeck[card].id=card; //assigning unique id to each card
   //console.log(cardDeck[card].id); //=card
  // console.log(card); 
    let  index= getRandomIndex(0, 108);
if (checkMatch(cardDeck[index])){
    console.log ("here"); 
    
  }
  else{
   // console.log ("not here"); 
    shuffledCardDeck.push(cardDeck[card]);
  }

}*/
console.log (cardDeck); 

for (let i=0; i<cardDeck.length; i++){
    let randomIndex=getRandomIndex(0, 100);
   // console.log(randomIndex +" "+ i); 
    let temp= {}; 
    temp=cardDeck[i]; 
    cardDeck[i]=cardDeck[randomIndex]; 
    cardDeck[randomIndex]=temp; 
};
//console.log (cardDeck); 
//shuffledDeck();
//console.log (shuffledCardDeck); 
//console.log (counter); 
console.log (cardDeck); 
console.log (cardDeck.length); 
//console.log (shuffledCardDeck.length); 
