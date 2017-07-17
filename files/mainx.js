console.log("Uno is here!"); 


let colorArray= ["red", "green", "blue", "yellow"],
    cardDeck =new Array(),
    shuffledCardDeck =new Array(),
    //perviouslyUsedIndexes =new array(),
    oneThruNine =new Array(10).fill(null);

let UnoCard=function(colour, numero, effecto){
  
    this.color=colour,
    this.number=numero,
    this.special=effecto
};  


colorArray.forEach(function(color) {
    for (let number in oneThruNine){
        cardValue=parseInt(number); 
        let newNumberCard= new UnoCard(color, cardValue, null); 
        if (cardValue===0){
            let newActionCard= new UnoCard(color, null, "DrawTwoCards");
                cardDeck.push(newActionCard);
                cardDeck.push(newActionCard);
                newActionCard= new UnoCard(color, null, "ReverseCards");
                cardDeck.push(newActionCard);
                cardDeck.push(newActionCard);
                newActionCard= new UnoCard(color, null, "SkipCards");
                cardDeck.push(newActionCard);
                cardDeck.push(newActionCard);
                cardDeck.push(newNumberCard);
        }
        else{
                cardDeck.push(newNumberCard);
                cardDeck.push(newNumberCard);
        }           
    }
    let newWildCard= new UnoCard(null, null, "Wild"); 
    let newDrawFourCard= new UnoCard(null, null, "DrawFour"); 
        cardDeck.push(newWildCard);
        cardDeck.push(newDrawFourCard);
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

var counter=0; 

var shuffledDeck =function(index){
    //
    //perviouslyUsedIndexes.push(index);  
    while (counter<108){
        //let index=getRandomIndex(0, 108);
            /*if (shuffledCardDeck.indexOf(cardDeck[index].index) === -1){
            //   let card=cardDeck[index]; 
            //    shuffledCardDeck[counter]=card;
                //return cardDeck[index]; 
                shuffledCardDeck.push(cardDeck[counter]); 
            }
            else{
                return "weee!";
             }*/
            
            console.log (cardDeck[counter].bob);
           counter++;
    }
    
       
}
//shuffledDeck();
//console.log (shuffledCardDeck); 
//console.log (counter); 

