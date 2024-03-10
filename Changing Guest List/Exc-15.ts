// Question # 15


//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.
  


// SOlve  Q:15

// Store names in an Array
let changeList :string[] = ['Naseema','Kulsoom','Manahil','Munnaza'];

// Print message to them
const my :string = 'Dear friend ';
const me :string = '\n\nyou are invited for dinner ';
const myself :string = 'Thanks!\n\n';

// Using for loop
for (let i=0; i<changeList.length; i++) {
    
    console.log(my + changeList[i] + me + myself);

}
 
// print Abset guest and New guest
let absent_Guest :string = 'Munnaza ';
let  new_Guest :string = 'Sadia';

changeList [3] = new_Guest ;

// Print message to them
const past :string = 'Dear friend ';
const present :string = '\n\nyou are invited for dinner ';
const future :string = 'Thanks!\n\n';
 
// Using for loop
for (let i=0; i<changeList.length; i++) {
    
    // print the name of after change the list and message to them
    console.log(past + changeList[i] + present + future);

}
 
// print message for also Absent guest
console.log(`Miss ${absent_Guest} is not coming for dinner.`);



//                ---x-x-x-x-x---



