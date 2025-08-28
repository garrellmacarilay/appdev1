// 03_functions.js
// Write a function greet(name) that returns a greeting.
// Write a function square(num) using an arrow function.
// Create a function calculator(a, b) that returns the sum and product.

//Normal Function
function greet(name) {
    return `Hello, ${name} Pogi`;
}
console.log(greet("Garrell"));

//Arrow Function
const square = (num) => num * num;
console.log(square(2));

//Calculator Function
function calculator(a, b) {
    const sum = a+b;
    const product = a+b;
    return {sum, product};
}

console.log(calculator(7,3));

