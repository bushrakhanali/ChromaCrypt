"use strict";
// Question # 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Solve Q:44
function order_sandwich(...items) {
    console.log(`You ordered a sandwich with: ${items.join(', ')}`);
}
order_sandwich('Bread', 'Cheese', 'Tomato');
order_sandwich('Ham', 'Lettuce', 'Mustard', 'Pickles');
order_sandwich('Turkey', 'Swiss', 'Mayo');
