"use strict";
// Question # 41
//Magicians: Make a array of magician’s names. 
//  Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//Solve Q:41
const magicians = ['Merlin', 'Gandalf', 'Harry'];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
console.log(magicians); // One method
//OR
show_magicians(magicians); //     Second method
