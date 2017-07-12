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
        let newCard= new UnoCard(color, cardValue, null); 
        if (cardValue<9){
            let newActionCard= new UnoCard(color, null, "DrawTwoCards");
                cardDeck.push(newActionCard);
                cardDeck.push(newActionCard);
                newActionCard= new UnoCard(color, null, "ReverseCards");
                cardDeck.push(newActionCard);
                cardDeck.push(newActionCard);
                newActionCard= new UnoCard(color, null, "SkipCards");
                cardDeck.push(newActionCard);
                cardDeck.push(newActionCard);
                
                //Skip cards
        }

        if (cardValue===0){
                cardDeck.push(newCard);
        }

        else{
                cardDeck.push(newCard);
                cardDeck.push(newCard);
        }

        
           
    }
   

});


/*
8 Draw Two cards – 2 each in blue, green, red, and yellow
8 Reverse cards – 2 each in blue, green, red, and yellow
8 Skip cards – 2 each in blue, green, red, and yellow       */


console.log (cardDeck); 
console.log (cardDeck.length); 



