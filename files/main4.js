




////////////////////////


console.log("Uno is here!"); 


let colorArray= ["red", "green", "blue", "yellow"],
    cardDeck =new Array(),
    shuffledCardDeck =new Array(),
    oneThruNine =new Array(10).fill(null),
    playerHand=new Array(),
    computerHand=new Array(),
    discardPile=new Array();

let UnoCard=function( num, colour, CardValue, effecto){
    this.id=num,
    this.color=colour,
    this.number=CardValue,
    this.special=effecto
};  
let handStats=function( numActionCards, numNumMatches, numColorMatches){
    this.actionCards=numActionCards,
    this.numberMatches=numNumMatches,
    this.colorMatches= numColorMatches
    
};  
/*
let optionsConsiderations=function(placeDownA,placeDownB, palceDownC){
    this.numberMatchesResults=null;
    this.colorMatchesResults=null; 
    this.actionCardsResults=null;  
}; */

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


var counter=0; 


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

//console.log (cardDeck); 
//console.log (cardDeck.length); 

//console.log (cardDeck); 
var shuffledeck=function(){
    for (let i=0; i<cardDeck.length; i++){
        let randomIndex=getRandomIndex(0, 100);
    // console.log(randomIndex +" "+ i); 
        let temp= {}; 
        temp=cardDeck[i]; 
        cardDeck[i]=cardDeck[randomIndex]; 
        cardDeck[randomIndex]=temp; 
    };
}
shuffledeck(); 

//console.log (cardDeck); 
//shuffledDeck();
//console.log (shuffledCardDeck); 
//console.log (counter); 


let currentCardIndex=0; 

let drawACard=function(){
    console.log ("card being drawn");
    //let cardDrawn={};
    //cardDrawn=cardDeck[currentCardIndex]; 
    let cardDrawn=cardDeck.shift(); 
   // console.log (cardDrawn);
    currentCardIndex++;  
    return cardDrawn;
}

let distributeSevenCards=function(){
    for (let numberOfCard=0;numberOfCard<7; numberOfCard++){
        playerHand.push(drawACard());
        computerHand.push(drawACard());
    }
}
distributeSevenCards();

let startDiscardPile=function(){
    let card=drawACard(); 
    if (card.special===null){
        discardPile.push(card);
    }
    else if (card.special!==null){//if the first card drawn was an action card then put back and redraw
        console.log("null");
         cardDeck.push(card);
         startDiscardPile();
    }
};

startDiscardPile();

console.log( currentCardIndex);
//console.log( discardPile); 
let topOfDiscardPile=function(){
    return discardPile[discardPile.length-1]; 
};

let checkForActionCards= function(card){
    if (card.special==null){
        //console.log("null is here!");
        return false; 
    }
    else{
        // console.log("effect card!");
         return true; 
    }
}; 
let checkNumberMatches= function(card){
    let top0fDiscardPile=topOfDiscardPile(); 
    if (card.number===top0fDiscardPile.number){
       // console.log("number match!");
        return true; 
    }
    else{
        // console.log("no number match.");
         return false; 
    }
}; 
let checkColorMatches= function(card){
    let top0fDiscardPile=topOfDiscardPile(); 
    if (card.color===top0fDiscardPile.color){
       // console.log("color match!");
        return true; 
    }
    else{
       //  console.log("no color match.");
         return false; 
    }
}; 

let computerHandStats=new handStats; //(ActionCards,cardNumberMatches, cardColorMatches); 
var analyzeTheHand=function(hand){//recieves computer's hand array 
    let ActionCards=0; 
     let cardNumberMatches=0; 
      let cardColorMatches=0; 

    for (let card=0; card<hand.length; card++){
        if (checkForActionCards(hand[card])){
             ActionCards++;
           console.log(hand[card]);
        }
        if (checkNumberMatches(hand[card])){
            console.log(hand[card]);
             cardNumberMatches++;
        }
        if (checkColorMatches(hand[card])){
               console.log(hand[card]);
             cardColorMatches++;
        }
    }
     console.log ( ActionCards+" ActionCards "+  cardNumberMatches+ " cardNumberMatches "+
     cardColorMatches+" cardColorMatches" + " mom"); 
    console.log(hand.length);
    computerHandStats=new handStats(ActionCards,cardNumberMatches, cardColorMatches); //making hand stats global
    console.log (computerHandStats); 
    return new handStats(ActionCards,cardNumberMatches, cardColorMatches);
};






analyzeTheHand(computerHand);
//console.log ( computerHandStats);
//console.log(computerHand); 
//console.log (checkCardForEffect( discardPile[0])); 
//console.log (topOfDiscardPile()); 
//console.log (discardPile); 
//console.log(  playerHand);

//console.log (cardDeck); 
//console.log(  computerHand);
//console.log (drawACard());
//console.log (drawACard());
//console.log (drawACard());
//console.log (cardDeck.length); 
//console.log (shuffledCardDeck.length); 
/*
Action cards (for each color):
    2x Draw Two
        When a person places this card, the next 
        player will have to pick up two cards and forfeit his/her turn.*/

let SpecialCardDrawTwo=function(player){
    let deck=null; 
    if (turnTracker(player)){
        deck="playerHand";
    //playerHand=new Array(),
    //computerHand=new Array(), 
}else{
     deck="computerHand";
}
    deck.push(drawACard()); 
    deck.push(drawACard()); 
    return turnTracker(player);//and forfeit his/her turn.*********************
}
//console.log(computerHand);    
//drawTwo(computerHand);
//console.log(computerHand);  
//console.log("computerHand");   

    /*2x Reverse
        If going clockwise, switch to counterclockwise or vice versa*/
let SpecialCardReverse=function(player){
   return turnTracker(player);
}
   /* 2x Skip
        When a player places this card, the next player has to 
        skip their turn. If turned up at the beginning, the first 
        player loses his/her turn.*/

let SpecialCardSkipTwo=function(player){
       console.log(`${player} set down-SkipTwo- skip computer's turn`)
       return turnTracker(player);   
};

/*
Wild cards:
    4x Wild
        This card represents all four colors, and can 
        be placed on any card. The player has to state 
        which color it will represent for the next player.
        It can be played regardless of whether another card is available.*/

let SpecialCardWild=function(CurrentPlayer){
    let colorSwichedTo=null; 
        if(CurrentPlayer==="player"){
            //ask player for color input, asign to colorSwichedTo;
                discardPile.push(new UnoCard(000, colorSwichedTo, null, "playedSpecialCardWild"));
                return colorSwichedTo; 
        }
        else if (CurrentPlayer==="computer"){
            let autoColorChoice=getRandomIndex(0, 3);
                colorSwichedTo=colorArray[autoColorChoice];
                discardPile.push(new UnoCard(000, colorSwichedTo, null, "playedSpecialCardWild"));
                return colorSwichedTo;
        }
        
} 



/*
    4x Wild Draw Four
        This acts just like the wild card except that the next player 
        also has to draw four cards. With this card, you must have no other 
        alternative cards to play that matches the color of the card previously 
        played. If you play this card illegally, you may be challenged by 
        the other player to show your hand. If guilty, you need to draw 4 cards. 
        If not, the challenger needs to draw 6 cards instead.
 */
let SpecialCardWildDrawFour=function(CurrentPlayer, AskedMoreCardsToPlay){
        if (AskedMoreCardsToPlay){
            console.log(SpecialCardWild(CurrentPlayer));
            let isNext=turnTracker(CurrentPlayer);
                for (let zeroThruFour=0;zeroThruFour<4; zeroThruFour++){
                    isNext.push(drawACard()); 
                }
        }
}

//who will go first? Player or Computer? (based on button input);

//let turn="player"; //input from innerHTML;

let turnTracker=function(bool){
    if (bool==="player"){
        //play players hand
        console.log (bool);
        whoGoes="computer";
        return  whoGoes;
    }
    else if (bool==="computer"){
        //play computers hand
         console.log (bool);
         whoGoes="player";
         return  whoGoes;
    }
};

let whoGoes="computer"; //who goes first is decided by button press
for (let i=0; i<10; i++){
   // turnTracker(whoGoes); 
   //console.log(SpecialCardSkipTwo(whoGoes));
   console.log(SpecialCardWild(whoGoes));
}

let whoseTurnIsIt=function(){//call when switching turns 
    return whoGoes; 
}



  /* switch (autoColorChoice){
            case 0:
                color = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            //defualt?
        }*/

 //need function to check if player has "uno" cards left
        let callUno=function(hand){
            if (hand.length===1){
                console.log(`${hand} has called Uno!`);
            }
            else{
                console.log(`its ${turnTracker()}'s turn`);
            }
        } 

        //need function to check if there are no more cards left 
        let discardPileEmpty=function(){
            if (typeof cardDeck[0]==="undefined"){
                console.log ("no more cards left!")
                return true
            }
            else return false;
        };

        //need function to move cards from hand to discardpile array
            //remove card at specified index 
    let moveCardstoDiscardPile=function(hand){
       // hand.    
    }
//var removed = myFish.splice(2, 0, 'drum');
//index of 

        //need functions to compare if dropping action cards or dropping numbers is optimal


let computerStratategyAI=function(computerHand){

    let computerStats =analyzeTheHand(computerHand);//recieving call back pass
    console.log( computerStats); 
    
};

computerStratategyAI(computerHand);
console.log(computerHand);

