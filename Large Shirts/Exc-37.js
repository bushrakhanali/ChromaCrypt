"use strict";
// Question # 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Solve Q:37
function make_shirt_default(size = 'Large', message = 'CELINE') {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}
make_shirt_default(); // Large shirt with default message
make_shirt_default('Medium'); // Medium shirt with default message
make_shirt_default('Small', 'Hello Small Shirt!'); // Custom-sized shirt with a custom message
