// Create a second file that imports the default and named exports from 15_modules_export.js.
// Use them to display a message in the console.
// (No starter code for this one – create from scratch.)

import greet, { myInfo } from "./15_modules_export.js";

console.log(greet()); // Hello! Welcome to my module.
console.log(`Name: ${myInfo.name}, Age: ${myInfo.age}`);