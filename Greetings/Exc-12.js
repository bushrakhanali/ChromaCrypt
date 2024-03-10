"use strict";
// Question # 12
//  Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
//    The text of each message should be the same, but each message should be personalized with the person’s name.
//Solve Q:12
// Store names in an Array
let personName = ['BUSHRA KHAN', 'MALALA KHAN', 'MALAIKA KHAN', 'NASEEMA KHAN'];
// and store message
const message = 'Hi what about your studies: ';
// Using for loop
for (let i = 0; i < personName.length; i++) {
    // print the message and names in console.log
    console.log(message + personName[i]);
}
//               ---x-x-x-x-x---
