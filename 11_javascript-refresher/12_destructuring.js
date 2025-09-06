// Use destructuring to extract values from an object and an array.
// Also apply destructuring in function parameters.

const person = {
  name: "Garrell", // replace it with your name
  age: 21          // replace it with your age
};

const hobbies = ["Cooking", "Cycling", "Sleeping"]; // replace it with your hobbies


const { name, age } = person;
console.log("Object Destructuring:");
console.log(name); // Garrell
console.log(age);  // 21


const [hobby1, hobby2, hobby3] = hobbies;
console.log("\nArray Destructuring:");
console.log(hobby1); // Cooking
console.log(hobby2); // Cycling
console.log(hobby3); // Sleeping


function printPerson({ name, age }) {
  console.log(`\nDestructuring in Function Parameters:`);
  console.log(`Name: ${name}, Age: ${age}`);
}

printPerson(person);
