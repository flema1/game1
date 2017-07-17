




////////////////////////


console.log("Uno is here!"); 

let itsthisplayersTurn=null; 

let colorArray= ["red", "green", "blue", "yellow"],
    cardDeck =new Array(),
    shuffledCardDeck =new Array(),
    oneThruNine =new Array(10).fill(null),
    playerHand=new Array(),
    computerHand=new Array(),
    discardPile=new Array();

    duplicateComputerHand=new Array();
    duplicateDiscardPile=new Array();

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


// console.log (discardPile); 
// console.log (topOfDiscardPile()); 

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
           //console.log(hand[card]);
        }
        if (checkNumberMatches(hand[card])){
           // console.log(hand[card]);
             cardNumberMatches++;
        }
        if (checkColorMatches(hand[card])){
           //    console.log(hand[card]);
             cardColorMatches++;
        }
    }
    // console.log ( ActionCards+" ActionCards "+  cardNumberMatches+ " cardNumberMatches "+
     //cardColorMatches+" cardColorMatches" + " mom"); 
    //console.log(hand.length);
    computerHandStats=new handStats(ActionCards,cardNumberMatches, cardColorMatches); //making hand stats global
  //  console.log (computerHandStats); 
    return new handStats(ActionCards,cardNumberMatches, cardColorMatches);
};






//analyzeTheHand(computerHand);
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
             
let SpecialCardDrawTwoCards=function(player){
     console.log(`${player} set down-draw2cards- ${turnTracker(player)} draws 2cards + forfeits their turn`)
    
    let deck=null; 
        //deck=`${turnTracker(player)}Hand`; 
    
    if (player==="player"){
        deck=playerHand; 
    }
    else if (player==="computer"){
     
        deck=computerHand; 
    }
    deck.push(drawACard()); 
    deck.push(drawACard()); 

    return player;//and forfeit his/her turn.*********************
}

//console.log(computerHand);    
//drawTwo(computerHand);
//console.log(computerHand);  
//console.log("computerHand");   

    /*2x Reverse
        If going clockwise, switch to counterclockwise or vice versa*/
                //ReverseCards
let SpecialCardReverseCards=function(player){
  console.log( `${player} has placed ReverseCards, its ${turnTracker(player)}'s turn` );
   return turnTracker(player);
}
   /* 2x Skip
        When a player places this card, the next player has to 
        skip their turn. If turned up at the beginning, the first 
        player loses his/her turn.*/

let SpecialCardSkipCards=function(player){
       console.log(`${player} set down-"Skip". Skip ${turnTracker(player)}'s turn. its ${player}'s turn`);
       return player;   
};

/*
Wild cards:
    4x Wild
        This card represents all four colors, and can 
        be placed on any card. The player has to state 
        which color it will represent for the next player.
        It can be played regardless of whether another card is available.*/

let SpecialCardWild=function(CurrentPlayer){//Wild
   // console.log (`${CurrentPlayer} played a  wild card`);
    let colorSwichedTo=null; 
        if(CurrentPlayer==="player"){
            //ask player for color input, asign to colorSwichedTo; ************************************
                discardPile.push(new UnoCard(000, colorSwichedTo, null, "playedSpecialCardWild"));
                console.log (`Wild card was played by ${CurrentPlayer} new color is ${autoColorChoice}`)

                return colorSwichedTo; 
        }
        else if (CurrentPlayer==="computer"){
        
            let autoColorChoice=getRandomIndex(0, 3);
                colorSwichedTo=colorArray[autoColorChoice];
                // discardPile.push(new UnoCard(000, colorSwichedTo, null, "playedSpecialCardWild"));
                duplicateDiscardPile.push(new UnoCard(000, colorSwichedTo, null, "playedSpecialCardWild"));
                console.log (`Wild was played by ${CurrentPlayer} new color option is ${colorSwichedTo}`)

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

let SpecialCardDrawFour=function(player){
        //if (AskedMoreCardsToPlay){
            console.log(SpecialCardWild(player));
            
   console.log(`${player} set down-draw4- ${turnTracker(player)} draws 4cards`)
    
            if (player==="player"){
        deck=computerHand; 
    }
    else if (player==="computer"){
        deck=playerHand; 
    }

                for (let zeroThruFour=0;zeroThruFour<4; zeroThruFour++){
                    deck.push(drawACard()); 
                }
        //}
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
  //console.log(SpecialCardWild(whoGoes));
}

let whoseTurnIsIt=function(itsXsturn, bool){//call when switching turns 
if (bool===true){
    console.log(`action card was played. its now${itsXsturn}s turn`); 
}
// else{
     whoGoes=itsXsturn;// reassigning global variable for turn tracker
// }
    
    //return itsXsturn; 
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
    let moveCardstoDiscardPile=function(hand, key){
       // hand.    
        var cardRemoved;
        let top0fDiscardPile=topOfDiscardPile(); 
            console.log (top0fDiscardPile); 
            console.log (hand);
       for (let card=0; card<hand.length; card++){
           if (hand[card][key]===top0fDiscardPile[key]){
               cardRemoved=hand.splice(card, 1);
               console.log ("bobo");
                 console.log(cardRemoved);
                 discardPile.push(cardRemoved[0]);
                 console.log ("bob");
                // console.log(hand[card][key]);
                 //  discardPile.push(card);hand[card]
                

           }
          
       }
    }

/*
 var array = [{y:"t", x:2},{y:"z",x:5},{y:"t",x: 9},{y:"k",x:5},{y:"t",x:11}];
 var removed;

for (let i=0; i<array.length;i++){
  if (array[i].x===5){
      console.log (i);
     removed=array.splice(i, 1)[0];
     console.log (removed);
      //console.log (array[i].x);
  }
 
}
*/
//var removed = myFish.splice(2, 0, 'drum');
//index of 

        //need functions to compare if dropping action cards or dropping numbers is optimal





let considerSpecialCards=function(computerStatsObject){
   if (computerStatsObject.actionCards){
        console.log ("action cards present" + computerStatsObject.actionCards);
        for (card of computerHand){
            if (card.special){
                console.log (card.special);
                 if (card.special==="DrawTwoCards"){
                    whoseTurnIsIt(SpecialCardDrawTwoCards("computer"), true);
                 }
                 if (card.special==="ReverseCards"){
                     console.log ("ReverseCards was placed ");
                     whoseTurnIsIt( SpecialCardReverseCards("computer"), true);
                 }
                 if (card.special==="SkipCards"){
                     whoseTurnIsIt( SpecialCardSkipCards("computer"),true);
                 }
                 if (card.special==="Wild"){
                     
                     SpecialCardWild("computer");
                 }
                if (card.special==="DrawFour"){
                     SpecialCardDrawFour("computer");
                   }
            }  
        }
    }
};

duplicateComputerHand=new Array();
duplicateDiscardPile=new Array();


duplicateComputerHand=computerHand;
duplicateDiscardPile=discardPile; 


let computerStratategyAI=function(computerHand){
   let computerStats =analyzeTheHand(computerHand);//recieving call back pass
   console.log( computerStats); 

   if (computerStats.numberMatches>computerStats.colorMatches){
       console.log('numberMatches is greater than colorMatches');
           moveCardstoDiscardPile(computerHand, "number" );  
   }
   else if (computerStats.colorMatches>computerStats.numberMatches){
       console.log(' colorMatches  greater than numberMatches'); 
           moveCardstoDiscardPile(computerHand, "color"); 
   }
   else if (computerStats.colorMatches!==0 && computerStats.colorMatches===computerStats.numberMatches){
       console.log(' colorMatches and numberMatches are equal'); 
       let choice=getRandomIndex(0, 1);//returns a random number
       if (choice){
           console.log(' colorMatches is chosen');
               moveCardstoDiscardPile(computerHand, "color"); 
       }
       else {
            console.log(' numberMatches is chosen');
                moveCardstoDiscardPile(computerHand,"number"); 
       }

   }

   else if(computerStats.actionCards>0){//checkimg for action cards
       console.log("action cards! detected.");
       considerSpecialCards( computerStats);//what if current action cards were played? 
   }
   else if (computerStats.actionCards===0) {
          console.log("no action cards detected.");
          //draw a card and consider again 
          drawACard();  
          computerStratategyAI(computerHand);
   }

   return  computerStats; 
};





console.log ("---"); 
//computerStratategyAI(computerHand);
computerStratategyAI(computerHand);

//console.log(computerHand);
//console.log (discardPile); 
//console.log (cardDeck); 
console.log (topOfDiscardPile() );

//considerSpecialCards( computerStratategyAI(computerHand)); 
   console.log( `${turnTracker("player")}`);

//console.log(whoseTurnIsIt() + "Hello"); 


//console.log (whoseTurnIsIt(turnTracker("computer"), true)); 
//let x=new handStats(3,3, 4); 
//console.log (x);
//computerStratategyAI(x);

console.log (discardPile); 
console.log (computerHand.length);


///
