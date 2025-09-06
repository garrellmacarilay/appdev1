// 08_essential_features.js
// Create an array of 3 hobbies and use .map() to print them.
// Use destructuring to extract values from an object student = { name, age }.
// Use the spread operator to copy an array [1, 2, 3] into a new array and add 4, 5.

const hobbiesKo = ["Coding", "Cycling", "Sleeping"];
const showHobbies = hobbiesKo.map(hobby=>console.log(hobby));


const student= {name:"Garrell", age:21};
const {name, age} = student;
console.log(name);
console.log(age);


const numbers = [1,2,3];
const newNumbers = [...numbers,4,5];
console.log(newNumbers);