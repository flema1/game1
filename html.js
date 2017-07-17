$(document).ready(function(){

const $parent= $('<div id="parent"/>').appendTo('body');


const $firstDiv= $('<div id="one"/>').appendTo('#parent');
const $firstbutton= $('<button onclick="displayCardsComp(computerHand);"/>').appendTo('#one');
const $firstDisplay= $('<div id="one_display"/>').appendTo('#one');

const $secondDiv= $('<div id="two"/>').appendTo('#parent');
const $secondbutton= $('<button onclick="displayDiscardPile();"/>').appendTo('#two');
const $secondDisplay= $('<div id="two_display"/>').appendTo('#two');


const $thirdDiv= $('<div id="three"/>').appendTo('#parent');
const $thirdbutton= $('<button onclick="displayCardsPlayer(playerHand);"/>').appendTo('#three');
const $thirdDisplay= $('<div id="three_display"/>').appendTo('#three');

//$firstDisplay.text('The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element');
//$thirdDiv.text('The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element');
//$firstDisplay.text('The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element');

});////////dont delete. **************************

let displayCardsComp= function(hand){
   //$('#one_display').text(hand[1].color);
    console.log (hand[1].number);


for (let card=0; card<hand.length; card++ ){
   
    if (hand[card].number){
        const $unoCard= $('<div class="unoCard"/>').appendTo('#one_display');
        $unoCard.text(`${hand[card].number}`); 
        $unoCard.css("color", `${hand[card].color}`);
    }
    else {
        const $unoCard= $('<div class="unoCard"/>').appendTo('#one_display');
        $unoCard.text(`${hand[card].special}`); 
        $unoCard.css("color", `${hand[card].color}`);
   
    }
   
}

};

let displayDiscardPile=function(){
    let card= topOfDiscardPile(); 
    console.log(card); 
 const $unoCardD= $('<div class="unoCard"/>').appendTo('#two_display');
        $unoCardD.text(`${card.number}`); 
        $unoCardD.css("color", `${card.color}`);
}

let displayCardsPlayer= function(hand){
   //$('#one_display').text(hand[1].color);
    console.log (hand[1].number);


for (let card=0; card<hand.length; card++ ){
   
    if (hand[card].number){
        const $unoCard= $('<div class="unoCard"/>').appendTo('#three_display');
        $unoCard.text(`${hand[card].number}`); 
        $unoCard.css("color", `${hand[card].color}`);
    }
    else {
        const $unoCard= $('<div class="unoCard"/>').appendTo('#three_display');
        $unoCard.text(`${hand[card].special}`); 
        $unoCard.css("color", `${hand[card].color}`);
   
    }
   
}

};
