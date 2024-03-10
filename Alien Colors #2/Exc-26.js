"use strict";
// Question # 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Solve Q:26
// It runs the if block
// Version # 01
let alien_color = 'Green';
if (alien_color === 'Green') {
    console.log('The player just earned 5 points for shooting the green alien.');
}
else {
    console.log('the player just earned 10 points.');
}
// It runs the else block
//Version # 02
alien_color = 'Red'; // change the colors except 'Green'
if (alien_color === 'Green') {
    console.log('The player just earned 5 points for shooting the green alien.');
}
else {
    console.log('the player just earned 10 points.');
}
