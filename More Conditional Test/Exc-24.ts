// Queestion # 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Solve Q:24


// For Equality and Inequality...

let string1 :string = 'Hello';
let string2 :string = 'World';


console.log(`string1 !== string2?  I predict True`);
console.log(string1 !== string2);

console.log(`string1 == string2?  I predict False`);
console.log(string1 == string2);

// For Lower Case Function...

let string3 :string = 'hello';

console.log(`string3.lowercase() == hello ? I predict True`);
console.log(string3.toLowerCase() == 'hello');


console.log(`string3.lowercase() !== hello ? I predict False.`);
console.log(string3.toLowerCase() !== 'hello');

// For NUMERICAL TEST:

// 1.Equality and Inequality based on also datatypes. === its show also datatypes.

let num1 :number = 5;
let num2 :number = 10;

console.log(`num1 !== num2? I predict True.`);
console.log(num1 !== num2)

console.log(`num1 === num2? I predict False.`);
console.log(num1 === num2)

// 2.Greater than and Less than

let num3 :number = 10;
let num4 :number = 6;

console.log(`num3 > num4 ?  I predict True.`);
console.log(num3 > num4);

console.log(`num3 < num4 ?  I predict False.`);
console.log(num3 < num4);

// 3.Greater than or Equla to

let num5 :number = 11;
let num6 :number = 21;

console.log(`num6 > num5? I Predict True.`);
console.log(num6 > num5);

console.log(`num5 == num6? I predict False.`);
console.log(num5 == num6);


// 4.Less than or Equal to

let num7 :number = 3;
let num8 :number = 8;

console.log(`num7 < num8? I predict True.`);
console.log(num7 < num8);

console.log(`num7 == num8? I predict False.`);
console.log(num7 == num8);


// For Using "And" and "Or"

let rule1 :string = 'Brave'
let rule2 :string = 'Coward'

console.log(`Is rule1 || rule2? I predict True`);
console.log(rule1 || rule2);

console.log(`Is rule1 && rule2? I predict False`);
console.log(rule1 && rule2);


// For  Item is in a array

let fruitsname :string[] = ['Apple', 'Strawberry', 'Banana', 'Grapes'];

console.log(`Is Apple fruit in array? I predict True `);
console.log(fruitsname.includes('Apple'));


// For  Item is not in a array

console.log(`Is Orange fruit is in array? I predict False`);
console.log(fruitsname.includes('Orange'));


//             ---x-x-x-x---
