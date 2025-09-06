// 02_variables.js
// Create variables for your name (string), age (number), and isStudent (boolean).
// Print their values and check their typeof.
// Do some arithmetic with two numbers (add, subtract, multiply, divide).
// Compare "5" == 5 and "5" === 5. Observe the difference.


const myName = "Garrell";
const myAge = 21;
const isStudent = true;

console.log(myName);
console.log(myAge);
console.log(isStudent);

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);

if ("5" === 5 ) {
    console.log("true");
} else {
    console.log("false");
}
// Strict equality operator (===) checks for both value and type, so "5" (string) is not equal to 5 (number).

if ("5" == 5 ) {
    console.log("true");
} else {
    console.log("false");
}

// Loose equality operator (==) checks for value only, so "5" (string) is considered equal to 5 (number).