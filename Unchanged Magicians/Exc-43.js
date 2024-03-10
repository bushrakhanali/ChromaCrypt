"use strict";
// Question # 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//  return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Solve Q:43
// const originalMagicians = magicians.slice(); // creating a copy
// const unchangedMagicians = make_great(originalMagicians.slice());
// show_magicians(originalMagicians);
// show_magicians(unchangedMagicians);
function make_album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album('Artist1', 'Album1'));
console.log(make_album('Artist2', 'Album2', 12));
console.log(make_album('Artist3', 'Album3', 8));
// Additional code for Exercise 40 extension
const magicians = ['Harry Potter', 'Mr Snap', 'Ron Weasley', 'Hermione Granger'];
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
// Create a copy of the original magicians array
const originalMagicians = magicians.slice();
// Call make_great with a copy of the original array
const greatMagicians = make_great(originalMagicians.slice());
// Display the original and modified arrays
console.log("Original Magicians:");
console.log(originalMagicians);
console.log("\nMagicians with 'the Great':");
console.log(greatMagicians);
// 
