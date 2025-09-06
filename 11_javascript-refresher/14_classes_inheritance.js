// Convert the following constructor function into a class.
// Then create a subclass that extends it and adds a new method.
// Subclass = Student
// Method = study() which prints NAME is studying // replace NAME with Person name


class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}


class Student extends Person {
  constructor(name, course) {
    super(name); 
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}


const person1 = new Person("Elmer");
person1.sayHello(); 

const student1 = new Student("Garrell", "Information Systems");
student1.sayHello(); 
student1.study();    
