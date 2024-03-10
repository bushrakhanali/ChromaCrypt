"use strict";
// Question # 42  
// Great Magicians: Start with a copy of your program from Exercise 39.
//   Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Solve Q:42
const magicians = ['Harry Potter', 'Mr Snap', 'Ron Weasley', 'Hermione Granger'];
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
const greatMagicians = make_great(magicians.slice()); // creating a copy to keep the original unchanged
// Display the modified list using console.log
for (const magician of greatMagicians) {
    console.log(magician);
}
function show_magicians(greatMagicians) {
    throw new Error("Function not implemented.");
}
