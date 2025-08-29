// 09_tricky_parts.js
// Test the difference between == and ===.
// Write an example where a variable is undefined vs null.
// Show how this behaves differently in a regular function vs an arrow function inside an object.
// Create two arrays, copy one into another using =, then try modifying one. What happens? Try again using the spread operator [...arr].

if (5=="5"){
    console.log("true");
} else {
    console.log("false");
}

if (5==="5"){
    console.log("true");
} else {
    console.log("false");
}    

let myName;
const myAge = null;
let isStudent = true;
console.log(myName);    
console.log(myAge);    


const person = {
    name: "Garrell",
    age: 21,
    isStudent: true,
    introduce: function () {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    },
    introduceArrow: () => {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  person.introduce();
  person.introduceArrow();

  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [6, 7, 8, 9, 10]; 

  arr2 = arr1;
  arr1[0] = 11;
  console.log(arr1);
  let combinedArray = [...arr1, ...arr2];
  console.log(combinedArray);