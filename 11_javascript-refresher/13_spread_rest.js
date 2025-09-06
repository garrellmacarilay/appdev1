// Use the spread operator to clone and extend an array and object.
// Use the rest operator to create a function that accepts any number of arguments.

const numbers = [1, 2, 3];
const user = { name: "Garrell", age: 21 }; // replace with your name and age


const moreNumbers = [...numbers, 4, 5];
console.log("Original Numbers:", numbers);
console.log("Extended Numbers:", moreNumbers);


const extendedUser = { ...user, hobby: "Cycling" };
console.log("\nOriginal User:", user);
console.log("Extended User:", extendedUser);


function sumAll(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log("\nSum with Rest Operator:");
console.log(sumAll(1, 2, 3));// 6
console.log(sumAll(5, 10, 15, 20)); // 50
console.log(sumAll());// 0
