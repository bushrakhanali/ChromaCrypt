// Question # 31:


// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

// Solve Q:31:

// Store name in Array
const usernamey: string[] = ['user1', 'admin', 'user2', 'user3', 'user4'];

// Using if else
if (usernamey.length === 0) {

    console.log('We need to find some users!');
  } else {

    // Using for loop 
    for (const username of usernamey) {

      // Using if else
      if (username.toLowerCase() === 'admin') {
              console.log('Hello admin, would you like to see a status report?');
      } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
      }
    }
  

  }



//          ---x-x-x-x-x---