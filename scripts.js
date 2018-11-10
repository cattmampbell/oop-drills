// console.log(`Testing... Testing... 1, 2, 3, 4, OOP Drills.`);
console.log(`Start of scripts.js file!`); // Should log: Start of scripts.js file!
console.log(`... ... ...`);

// Write 5 object literals, naming them person1 to person5
// Give each a property called 'name'
// Give each a function called 'sayHello', which will log a string to the console, like this:
// "Hello my name is ___."
const person1 = {
    name: `Olivia`,
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

const person2 = {
    name: `Toast`,
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

const person3 = {
    name: `Caleb`,
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

const person4 = {
    name: `Cody`,
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

const person5 = {
    name: `Megan`,
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

// Call the sayHello() function on each object, and check the console 
person1.sayHello(); // Should log: Hello! My name is Olivia.
person2.sayHello(); // Should log: Hello! My name is Toast.
person3.sayHello(); // Should log: Hello! My name is Caleb.
person4.sayHello(); // Should log: Hello! My name is Cody.
person5.sayHello(); // Should log: Hello! My name is Megan.

console.log(`... ... ...`);

// Create a constructor function that will take a name, age and city
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

// Write a method that will log a string a string to the console like this:
// "Hey! My name is ___. I am ___ years old and I live in ___."
Person.prototype.sayHello = function() {
    console.log('Hey! My name is ' + this.name + '. I am ' + this.age + ' and I live in ' + this.city + '.');
}

// Create 5 instances of the same friends from before, using the pseudo-class and method created above
const person1Again = new Person(`Olivia`, 24, `Hixson`);
const person2Again = new Person(`Toast`, 14, `Hixson`);
const person3Again = new Person(`Caleb`, 25, `Kennesaw`);
const person4Again = new Person(`Cody`, 28, `Red Bank`);
const person5Again = new Person(`Megan`, 30, `Red Bank`);

// Call the sayHello() function on each object, and check the console 
person1Again.sayHello(); // Should log: Hey! My name is Olivia. I am 24 years old and I live in Hixson.
person2Again.sayHello(); // Should log: Hey! My name is Toast. I am 14 years old and I live in Hixson.
person3Again.sayHello(); // Should log: Hey! My name is Caleb. I am 25 years old and I live in Kennesaw.
person4Again.sayHello(); // Should log: Hey! My name is Cody. I am 28 years old and I live in Red Bank.
person5Again.sayHello(); // Should log: Hey! My name is Megan. I am 30 years old and I live in Red Bank.

console.log(`... ... ...`);

// Using the ES6/ES2015 syntax, recreate the constructor function above
class PersonAgain {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    sayHelloAgain() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} and I live in ${this.city}.`)
    }
}
// Create 5 instances of the same friends from before, using ES6/ES2015 syntax
const person1ES6 = new PersonAgain(`Olivia`, 24, `Hixson`);
const person2ES6 = new PersonAgain(`Toast`, 14, `Hixson`);
const person3ES6 = new PersonAgain(`Caleb`, 25, `Kennesaw`);
const person4ES6 = new PersonAgain(`Cody`, 28, `Red Bank`);
const person5ES6 = new PersonAgain(`Megan`, 30, `Red Bank`);

// Call the sayHello() function on each object, and check the console 
person1ES6.sayHelloAgain(); // Should log: Hey! My name is Olivia. I am 24 years old and I live in Hixson.
person2ES6.sayHelloAgain(); // Should log: Hey! My name is Toast. I am 14 years old and I live in Hixson.
person3ES6.sayHelloAgain(); // Should log: Hey! My name is Caleb. I am 25 years old and I live in Kennesaw.
person4ES6.sayHelloAgain(); // Should log: Hey! My name is Cody. I am 28 years old and I live in Red Bank.
person5ES6.sayHelloAgain(); // Should log: Hey! My name is Megan. I am 30 years old and I live in Red Bank.

console.log(`... ... ...`);
console.log(`End of scripts.js file!`); // Should log: End of scripts.js file!