console.log("Uno is here!"); 


let colorArray= ["red", "green", "blue", "yellow"],
    cardDeck =new Array(),
    shuffledCardDeck =new Array(),
     
    //perviouslyUsedIndexes =new array(),
    oneThruNine =new Array(10).fill(null);
shuffledCardDeck.push(8);
 let UnoCard=function(i,colour, numero, effecto){
    this.id=i,
    this.color=colour,
    this.number=numero,
    this.special=effecto
};  

let co=0; 
colorArray.forEach(function(color) {

    for (let number in oneThruNine){
        cardValue=parseInt(number); 
       // let newNumberCard= new UnoCard(co++, color, cardValue, null); 

        if (cardValue===0){
           
                cardDeck.push(new UnoCard(co++, color, null, "DrawTwoCards"));//  newActionCard 'DrawTwoCards
                cardDeck.push(new UnoCard(co++, color, null, "DrawTwoCards"));//  newActionCard 'DrawTwoCards
                
            
                cardDeck.push(new UnoCard(co++, color, null, "ReverseCards"));//newActionCard ReverseCards
                cardDeck.push(new UnoCard(co++, color, null, "ReverseCards"));//newActionCard ReverseCards
                //newActionCard= new UnoCard(co++, color, null, "SkipCards");
                cardDeck.push(new UnoCard(co++, color, null, "SkipCards"));//  newActionCard "SkipCards
                cardDeck.push(new UnoCard(co++, color, null, "SkipCards"));//  newActionCard "SkipCards
                cardDeck.push(new UnoCard(co++, color, cardValue, null));//newNumberCard
        }

        else{
                cardDeck.push(new UnoCard(co++, color, cardValue, null));//newNumberCard
                cardDeck.push(new UnoCard(co++, color, cardValue, null));//newNumberCard
        }    
    }
   
});



  

/*
8 Draw Two cards – 2 each in blue, green, red, and yellow
8 Reverse cards – 2 each in blue, green, red, and yellow
8 Skip cards – 2 each in blue, green, red, and yellow  

how to target src using jquery
     */


console.log (cardDeck); 
console.log (cardDeck.length); 


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

/*
var counter=0;
var varis=0;
var shuffledDeck=function(){
   
    //perviouslyUsedIndexes.push(index);  
    while(varis<108){
       let index=getRandomIndex(0, 108);
           for(var card of shuffledCardDeck){
                console.log (cardDeck[index].id);
            if (card["id"]===cardDeck[index]['id']){
                console.log (card.id + " is already here "); 
                // shuffledCardDeck.push(cardDeck[index]); 
                counter++;
            }
            else {
               shuffledCardDeck.push(card); 
               varis++
            }
    }
}
}
       

 */           
          

// a
      
//shuffledDeck();``
//console.log (counter); 
//console.log (shuffledCardDeck); 
//console.log (varis); 

//console.log (console.log); 

//console.log (typeof cardDeck[67]["id"]);