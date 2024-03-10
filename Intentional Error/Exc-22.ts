// Question # 22

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

// Solve Q:22


// This Is Before Correct Intentional Error.

// Array
let guestList :string[] = ['Naseema','Kulsoom','Manahil','Munazza']; // Guest Names

// Print message
const invitations :string = ' \n\nIts glade to see you on my Dinner. Looking forward to seeing you. '; // Print Message to them
const moreabout :string = 'Dear Friend' 
const  morre :string = '\n\nThanks!';

// Using for loop,  If we remove the "===" it can be correct.This is called Intentional error
                 for (let  i=0;  i<guestList.length; i++) {

    
    console.log(moreabout + guestList[i] + invitations + morre);
}





