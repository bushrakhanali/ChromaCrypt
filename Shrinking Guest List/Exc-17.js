"use strict";
// Question # 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• //Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Solve Q:17
// Store Names in an Array
let change_List = ['Naseema', 'Kulsoom',];
// Print message to them
const past = 'Dear friend ';
const present = '\n\nyou are invited for dinner ';
const future = 'Thanks!\n\n';
// Using for loop
for (let i = 0; i < change_List.length; i++) {
    // Print Name and message in console.log for output
    console.log(past + change_List[i] + present + future);
}
// Another Array to store names
let apolog = ['Malaika', 'Manahil'];
// and Also print the message to them
const yesturday = 'Sorry ';
const today = '\n\nI have no space than two guests. ';
const tomorrow = 'apology I can not invite you because of the situation.Thanks\n\n  ';
// Using for loop
for (let i = 0; i < apolog.length; i++) {
    //Print names and messsage in console.log for output
    console.log(yesturday + apolog[i] + today + tomorrow);
}
// and also print the message
const hard = 'Dear friend ';
const work = '\n\nyou are still invited for dinner ';
const time = 'Thanks!\n\n';
// Using for loop
for (let i = 0; i < change_List.length; i++) {
    //Print names and messsage in console.log for output
    console.log(hard + change_List[i] + work + time);
}
//              ---x-x-x-x-x---
