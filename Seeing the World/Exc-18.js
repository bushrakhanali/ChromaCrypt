"use strict";
// Question # 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Solve Q:18
//Store the locations in a array. Make sure the array is not in alphabetical order.
let placesToVisit = ['Saudia Arabia', 'Switzerland', 'Paris', 'Tokyo', 'US'];
//Print your array in its original order.
console.log('Original Order ', placesToVisit);
//Print your array in alphabetical order without modifying the actual list.
console.log('Alphabetical order ', [...placesToVisit.sort()]);
//Show that your array is still in its original order by printing it.
console.log('Original Order (Still) ', placesToVisit);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse Alphabetical order ', placesToVisit.sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log('Original Order (still) ', placesToVisit);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log('Reverse The Order ', placesToVisit.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Original Order (again) ', placesToVisit.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that 
//its order has been changed.
console.log('Alphabetical Order ', placesToVisit.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that 
//its order has changed.
console.log('Sorted , Reverse Alphabetical Order ', placesToVisit.sort().reverse());
//    ---x-x-x---
