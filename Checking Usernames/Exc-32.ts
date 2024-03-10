
// Question # 32:

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
//      If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// SOlve Q:32:



// Make two Array and store name in it
const current_users: string[] = ['user1', 'user2', 'user3', 'admin', 'user4'];
const new_users: string[] = ['user5', 'user6', 'User1', 'user7', 'user8'];


// Using for loop
for (const newUsername of new_users) {

  const exists = current_users.some(
    (existingUsername) => existingUsername.toLowerCase() === newUsername.toLowerCase()

  );

  // By using if else
  if (exists) {

    console.log(`The username '${newUsername}' is already taken. Please choose a different one.`);

  } else {

    console.log(`The username '${newUsername}' is available.`);

  }
}



















