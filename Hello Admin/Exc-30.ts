

// Question # 30

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


// Solve Q:30



// Store name in an Array
const usernames: string[] = ['user1', 'admin', 'user2', 'user3', 'user4'];

// By using for loop
for (const username of usernames) {

  //Using if_else
  if (username.toLowerCase() === 'admin') {
    
    console.log('Hello admin, would you like to see a status report?');
  } else {

    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}



































