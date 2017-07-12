console.log("Uno is here!"); 


let colorArray= ["red", "green", "blue", "yellow"],
    cardDeck =new Array(),
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

4x Wild
This card represents all four colors, and can be placed on any card. The player 
has to state which color it will represent for the next player. It can be played
 regardless of whether another card is available.
 
4x Wild Draw Four
This acts just like the wild card except that the next player also has to draw 
four cards. With this card, you must have no other alternative cards to play that 
matches the color of the card previously played. If you play this card illegally,
 you may be challenged by the other player to show your hand. If guilty, you need 
 to draw 4 cards. If not, the challenger needs to draw 6 cards instead.     */


console.log (cardDeck); 
console.log (cardDeck.length); 



