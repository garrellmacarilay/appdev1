// Convert the following traditional functions into arrow functions.
// Include examples with no parameters, one parameter, and implicit return.

// function greet(name) {
//   return "Hello, " + name;
// }

const greetArrow = (name) => "Hello, " + name;
console.log(greetArrow("Garrell")); 

// function square(n) {
//   return n * n;
// }
const squareArrow = n => n * n;
console.log(squareArrow(4));


// function sayHi() {
//   console.log("Hi!");
// }

const sayHiArrow = () => console.log("Hi!");
sayHiArrow();

