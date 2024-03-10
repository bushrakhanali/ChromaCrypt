"use strict";
//Question # 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
// Solve Q:14
// Guest Names
let guest_List = ['Naseema', 'Kulsoom', 'Manahil', 'Munazza'];
//  Print Message to them
const moreabout = 'Dear Friend';
const invitations = ' \n\nIts glade to see you on my Dinner. Looking forward to seeing you. ';
const morre = '\n\nThanks!';
// Using for loop
for (let i = 0; i < guest_List.length; i++) {
    console.log(moreabout + guest_List[i] + invitations + morre);
}
//                 ---x-x-x-x-x-x---
