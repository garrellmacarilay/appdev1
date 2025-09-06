// 04_objects.js
// Create an object aboutMe with name, age, course.
// Add a method introduce() that prints: "Hi, my name is ___ and I am ___ years old."
// Add a new property hobby after creating the object.


const aboutMe = {
  name: "Garrell",   
  age: 21,           
  course: "BSIS",    
  introduce: function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.introduce();
aboutMe.hobby = "Coding";
console.log(aboutMe);