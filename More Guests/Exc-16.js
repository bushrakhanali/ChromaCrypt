"use strict";
// Question # 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// Solve Q:16
// Store Names in an Array
let change_List = ['Naseema', 'Kulsoom', 'Manahil', 'Munnaza'];
// print the Absent Guest and New Guest names
let absent_Guest = 'Munnaza ';
let new_Guest = 'Sadia';
change_List[3] = new_Guest;
// print message 
const past = 'Dear friend ';
const present = '\n\nyou are invited for dinner ';
const future = 'Thanks!\n\n';
// Using for loop                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
for (let i = 0; i < change_List.length; i++) {
    console.log(past + change_List[i] + present + future);
}
// print message
console.log(`Miss ${absent_Guest} is not coming for dinner.`);
console.log('Hi once again we found a bigger dinner table for you.');
// After change the list
change_List.unshift('Malala');
change_List.splice(2, 0, 'Malaika');
change_List.push('Bushra Khan');
// Using for loop 
for (let i = 0; i < change_List.length; i++) {
    //Print names and messages to them
    console.log(past + change_List[i] + present + future);
}
//                   ---x-x-x-x-x---
