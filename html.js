$(document).ready(function(){

const $parent= $('<div id="parent"/>').appendTo('body');


const $firstDiv= $('<div id="one"/>').appendTo('#parent');
const $button= $('<button onclick="displayCards(computerHand);"/>').appendTo('#one');
const $firstDisplay= $('<div id="one_display"/>').appendTo('#one');

const $secondDiv= $('<div id="two"/>').appendTo('#parent');
const $thirdDiv= $('<div id="three"/>').appendTo('#parent');
//$firstDisplay.text('The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element');
$thirdDiv.text('The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element');
//$firstDisplay.text('The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element The overflow property specifies what to do if the content of an element exceeds the size of the element');

});////////dont delete. **************************

let displayCards= function(hand){
   //$('#one_display').text(hand[1].color);
    console.log ("99999999");


const $unoCard= $('<div class="unoCard"/>').appendTo('#one_display');

};