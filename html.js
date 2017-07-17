$(document).ready(function(){
     
const $startGame= $('<div id="startGame"/>').appendTo('body');
$startGame.text("Play UNO!")
const $startbutton= $('<button onclick="start();"/>').appendTo('#startGame');


         
});////////dont delete. **************************

let start=function(){
//distributeSevenCards();//distrubutes 7 cards to player and computer 
$('#startGame').remove(); //removes starting page display
//shuffledeck(); 
startDiscardPile();



const $parent= $('<div id="parent"/>').appendTo('body');

const $firstDiv= $('<div id="one"/>').appendTo('#parent');



const $firstbutton= $(`<button onclick='displayCards(computerHand, "#one_display");'/>`).appendTo('#one');
  
const $firstDisplay= $('<div id="one_display"/>').appendTo('#one');

const $secondDiv= $('<div id="two"/>').appendTo('#parent');
const $secondbutton= $('<button onclick="displayDiscardPile();"/>').appendTo('#two');
const $secondDisplay= $('<div id="two_display"/>').appendTo('#two');


const $computerbutton= $(`<div id="computer" onclick="whoseTurnIsIt('computer', false);"/>`).appendTo('#two');
    $computerbutton.text('computer');
const $playerbutton= $(`<div id="player" onclick="whoseTurnIsIt('player', false);"/>`).appendTo('#two');
    $playerbutton.text('player');
const $drawButton= $(`<div id="draw" onclick="draw();"/>`).appendTo('#two');
 $drawButton.text('Draw');
 


const $thirdDiv= $('<div id="three"/>').appendTo('#parent');
const $thirdbutton= $(`<button onclick='displayCards(playerHand, "#three_display");'/>`).appendTo('#three');
const $thirdDisplay= $('<div id="three_display"/>').appendTo('#three');
//let colorSwichedTo;

const $colorInput= $('<div id="colorInput"/>').appendTo('#two').appendTo('#parent');
      $colorInput.text("Wild Card: Please enter a color"); 
const $input= $('<input id="input" type="text" name="color"/>');
      $input.appendTo('#parent');
      const $submitButton= $(`<button id="submitButton" />`).appendTo('#parent');



//function returnColor(){
  //  return colorSwichedTo; 
//}
     

};


let checkActionCards=function(card){
   
                console.log (card.special);
                 if (card.special==="DrawTwoCards"){
                    whoseTurnIsIt(SpecialCardDrawTwoCards("player"), true);
                 }
                 else if (card.special==="ReverseCards"){
                     console.log ("ReverseCards was placed ");
                     whoseTurnIsIt( SpecialCardReverseCards("player"), true);
                 }
                 else if (card.special==="SkipCards"){
                     whoseTurnIsIt( SpecialCardSkipCards("player"),true);
                 }
                 else if (card.special==="Wild"){
                     
                     SpecialCardWild("player");
                 }
                else if (card.special==="DrawFour"){
                     SpecialCardDrawFour("player");
                   }
            }  
        




let displayCards= function(hand, target){


   //$('#one_display').text(hand[1].color);
   console.log (hand);


for (let card=0; card<hand.length; card++ ){
    console.log (hand[card]);
     const $unoCard= $('<div class="unoCard"/>').appendTo(target);
     const id=hand[card].id; 

        $unoCard.css("color", `${hand[card].color}`);

    if (hand[card].number){
        $unoCard.text(`${hand[card].number}`); 
        //$unoCard.attr('id', id);
        //key="number"; 
    }
    else if ( hand[card].special===null && hand[card].number===0){
        // const $unoCard= $('<div class="unoCard"/>').appendTo(target);
        $unoCard.text(`${hand[card].number}`); 
          // $unoCard.attr('id', id);
        // $unoCard.css("color", `${hand[card].color}`);
    }
    else {
        
        // const $unoCard= $('<div class="unoCard"/>').appendTo(target);
        $unoCard.text(`${hand[card].special}`); 
        
          // $unoCard.attr('id', 'special');
        // $unoCard.css("color", `${hand[card].color}`);
        

    }

 $unoCard.attr('id', id);

let toDiscardPile=function(){
   // console.log(typeof $(this).attr('id')); 
   // moveCardstoDiscardPile(hand, $(this).attr('id'));
    
     console.log( $(this).attr('id')); 
     for (let card=0; card<hand.length; card++ ){
         if (hand[card].special){
             checkActionCards(hand[card]);
         }
         if (hand[card].id==$(this).attr('id')){
              if (hand[card].special==="Wild"){
                 hand[card].color=  document.getElementById('input').value; 
             }
              let cardRemoved=hand.splice(card, 1);
               //console.log ("bobo");
                 console.log(cardRemoved);
                 discardPile.push(cardRemoved[0]);

                // console.log ("bob");

         }
     }
      displayDiscardPile(); 
    $(this).remove(); 
    
}


if (hand===playerHand || hand===temp){
 $unoCard.on('click', toDiscardPile); 
}


   
}


};

let displayDiscardPile=function(){

   let card = discardPile[discardPile.length-1]; 
 
 const $unoCardD= $('<div class="unoCard"/>').appendTo('#two_display');
    
    if (card.number){
        $unoCardD.text(`${card.number}`); 
    }
    else if ( card.special===null && card.number===0){
        $unoCardD.text(`${card.number}`); 
    }
    else {
        if ( card.special==="Wild"){
            card.color=document.getElementById('input').value; 
        }

        $unoCardD.text(`${card.special}`); 
    }
        $unoCardD.css("color", `${card.color}`);
//         if (discardPile.length>2){
//    $(' #two_display .unoCard').eq(0).remove(); 
// }
}
  let temp=new Array();


let draw= function(){
    let card= drawACard(); 
  
    temp.push(card); 
displayCards(temp, "#three_display")
callUno( playerHand);
temp=[]; 

    playerHand.push(card); 
}