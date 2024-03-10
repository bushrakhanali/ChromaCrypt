"use strict";
// Question # 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
// Solve Q:19
// print the number of people 
let numberOfPeopleInvited = 3;
// print a message indicating the number of people you are inviting to dinner.
console.log('There are 3 people invited for dinner\n\n');
//  Make an Array
let dinner_Guests = ['Bushra Khan', 'B.Khan', 'Bushra K.'];
// Store a message for guest 
const SavoryPalate = 'AssalamWalaikum Dear ';
const CulinaryExplorer = '\n\nyou are invited for dinner.Looking forward to seeing you.';
const EpicureanVoyager = 'Thanks!!!\n\n';
// Using for loop
for (let i = 0; i < dinner_Guests.length; i++) {
    // Print message with names for invited guest
    console.log(SavoryPalate + dinner_Guests[i] + CulinaryExplorer + EpicureanVoyager);
}
//     ---x-x-x-x-x---
