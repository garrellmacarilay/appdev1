// Convert the following traditional functions into arrow functions.
// Include examples with no parameters, one parameter, and implicit return.

function greet(name) {
  return "Hello, " + name;
}

const greetArrow = (name) => "Hello, " + name;
const add = (a, b) => a + b;

function square(n) {
  return n * n;
}
const squareArrow = n => n * n;


function sayHi() {
  console.log("Hi!");
}

const sayHiArrow = () => console.log("Hi!");
