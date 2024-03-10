"use strict";
// Question # 06 
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
// Solve Q:06
// Store the Name in Variable and with some white space:
const person_Name = '   \n\tBushra Khan\t\n    ';
// store the variable in console.log:
console.log(person_Name);
// For avoiding White spaces:
const whithout_Whitespaces = person_Name.trim();
console.log(whithout_Whitespaces);
//             ---x-x-x---
