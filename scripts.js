/* More on Colorful Console Messages here: https://www.samanthaming.com/tidbits/40-colorful-console-message */

// console.log(`Testing... Testing... 1, 2, 3, 4, OOP Drills.`);
console.log('%cStart%c of scripts.js file!', 'font-weight: 900; color: blue;', 'font-weight: 400; color: blue;'); // Should log: Start of scripts.js file!
// console.log(`%c... ... ...`, 'color: grey;');

// Write 5 object literals, naming them 'person1', 'person2', 'person3', etc.
    // Give each a property called 'name'
    // Give each a function called 'sayHello', which will log a string to the console, like this:
    // "Hello my name is ___."
const person1 = {
    name: `Olivia`,
    sayHello: function() {
        console.log(`   Hello! My name is ${this.name}.`, `color: red;`)
    }
}

const person2 = {
    name: `Toast`,
    sayHello: function() {
        console.log(`   Hello! My name is ${this.name}.`)
    }
}

const person3 = {
    name: `Caleb`,
    sayHello: function() {
        console.log(`   Hello! My name is ${this.name}.`)
    }
}

const person4 = {
    name: `Cody`,
    sayHello: function() {
        console.log(`   Hello! My name is ${this.name}.`)
    }
}

const person5 = {
    name: `Megan`,
    sayHello: function() {
        console.log(`   Hello! My name is ${this.name}.`)
    }
}

console.log(`%cVia %cObject Literal%c Syntax:`, `font-weight: 600; color: black;`, `font-weight: 900; text-decoration: underline; color: green;`, `font-weight: 600; color: black;`);

// Call the sayHello() function on each object
person1.sayHello(); // Should log: Hello! My name is Olivia.
person2.sayHello(); // Should log: Hello! My name is Toast.
person3.sayHello(); // Should log: Hello! My name is Caleb.
person4.sayHello(); // Should log: Hello! My name is Cody.
person5.sayHello(); // Should log: Hello! My name is Megan.

// console.log(`%c... ... ...`, 'color: grey;');

// Create a constructor function that will take a name, age and city
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

// Create a method that will log a string a string to the console like this:
// "Hey! My name is ___. I am ___ years old and I live in ___."
Person.prototype.sayHello = function() {
    console.log('   Hey! My name is ' + this.name + '. I am ' + this.age + ' and I live in ' + this.city + '.');
}

// Create 5 instances of the same friends from before, using the pseudo-class and method created above
const person1Again = new Person(`Olivia`, 24, `Hixson`);
const person2Again = new Person(`Toast`, 14, `Hixson`);
const person3Again = new Person(`Caleb`, 25, `Kennesaw`);
const person4Again = new Person(`Cody`, 28, `Red Bank`);
const person5Again = new Person(`Megan`, 30, `Red Bank`);

console.log(`%cVia %cES5%c Syntax:`, `font-weight: 600; color: black;`, `font-weight: 900; text-decoration: underline; color: green;`, `font-weight: 600; color: black;`);

// Call the sayHello() function on each object, and check the console 
person1Again.sayHello(); // Should log: Hey! My name is Olivia. I am 24 years old and I live in Hixson.
person2Again.sayHello(); // Should log: Hey! My name is Toast. I am 14 years old and I live in Hixson.
person3Again.sayHello(); // Should log: Hey! My name is Caleb. I am 25 years old and I live in Kennesaw.
person4Again.sayHello(); // Should log: Hey! My name is Cody. I am 28 years old and I live in Red Bank.
person5Again.sayHello(); // Should log: Hey! My name is Megan. I am 30 years old and I live in Red Bank.

// console.log(`%c... ... ...`, 'color: grey;');

// Using the ES6/ES2015 syntax, recreate the constructor function above
class PersonAgain {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    sayHelloAgain() {
        console.log(`   Hey! My name is ${this.name}. I am ${this.age} and I live in ${this.city}.`)
    }
}
// Create 5 instances of the same friends from before, using ES6/ES2015 syntax
const person1ES6 = new PersonAgain(`Olivia`, 24, `Hixson`);
const person2ES6 = new PersonAgain(`Toast`, 14, `Hixson`);
const person3ES6 = new PersonAgain(`Caleb`, 25, `Kennesaw`);
const person4ES6 = new PersonAgain(`Cody`, 28, `Red Bank`);
const person5ES6 = new PersonAgain(`Megan`, 30, `Red Bank`);

console.log(`%cVia %cES6%c Syntax:`, `font-weight: 600; color: black;`, `font-weight: 900; text-decoration: underline; color: green;`, `font-weight: 600; color: black;`);

// Call the sayHello() function on each object, and check the console 
person1ES6.sayHelloAgain(); // Should log: Hey! My name is Olivia. I am 24 years old and I live in Hixson.
person2ES6.sayHelloAgain(); // Should log: Hey! My name is Toast. I am 14 years old and I live in Hixson.
person3ES6.sayHelloAgain(); // Should log: Hey! My name is Caleb. I am 25 years old and I live in Kennesaw.
person4ES6.sayHelloAgain(); // Should log: Hey! My name is Cody. I am 28 years old and I live in Red Bank.
person5ES6.sayHelloAgain(); // Should log: Hey! My name is Megan. I am 30 years old and I live in Red Bank.

console.log(`%c. . .`, 'color: grey; font-weight: 800; font-size: 12px;');

// Create a parent class called 'Vehicle', with properties for the type (String - 'Truck, 'Sedan', 'Motorcycle', 'Coupe', etc.), manufacturer (String) and the number of wheels (Number)
class Vehicle {
    constructor(type, manufacturer, model, numberOfWheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.numberOfWheels = numberOfWheels;
    }

    // Create a method called 'aboutVehicle' so that it logs a String to the console  
    aboutVehicle() {
        console.log(`%cVia %cVehicle%c Parent Class:`, `font-weight: 600;`, `font-weight: 900; text-decoration: underline;`, `font-weight: 600; color:`);
        console.log(`   %cVehicle Type:%c ${this.type}`, `text-decoration: underline; font-weight: 600;`, `color: green; font-weight: 600;`);
        console.log(`   %cManufacturer:%c ${this.manufacturer}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cModel:%c ${this.model}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cWheels:%c ${this.numberOfWheels}`, `text-decoration: underline;`, `font-weight: 400;`);
    }
}

// Create a child class called 'Truck' with additional properties for number of doors (Number) and truck bed (Boolean)
class Truck extends Vehicle {
    constructor(type, manufacturer, model, numberOfWheels, numberOfDoors, truckBed) {
        super(type, manufacturer, model, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.truckBed = truckBed;
    }

    // Overwrite the inherited method called 'aboutVehicle' so that it logs a String to the console 
    aboutVehicle() {
        console.log(`%cVia %cTruck%c Child Class:`, `font-weight: 600;`, `font-weight: 900; text-decoration: underline;`, `font-weight: 600; color:`);
        console.log(`   %cVehicle Type:%c ${this.type}`, `text-decoration: underline; font-weight: 600;`, `color: green; font-weight: 600;`);
        console.log(`   %cManufacturer:%c ${this.manufacturer}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cModel:%c ${this.model}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cWheels:%c ${this.numberOfWheels}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`       %cDoors:%c ${this.numberOfDoors}`, `font-weight: 700; text-decoration: underline; color: grey;`, `font-weight: 400;`);
        console.log(`       %cHas Truck Bed:%c ${this.truckBed}`, `font-weight: 700; text-decoration: underline; color: grey;`, `font-weight: 400;`);
    }
}

// Create a child class called 'Sedan' with additional properties for size (String - 'Small' or 'Medium'), and miles per gallon (Number)
class Sedan extends Vehicle {
    constructor(type, manufacturer, model, numberOfWheels, size, milesPerGallon) {
        super(type, manufacturer, model, numberOfWheels);
        this.size = size;
        this.milesPerGallon = milesPerGallon;
    }

    // Overwrite the inherited method called 'aboutVehicle' so that it logs a String to the console 
    aboutVehicle() {
        console.log(`%cVia %cSedan%c Child Class:`, `font-weight: 600;`, `font-weight: 900; text-decoration: underline;`, `font-weight: 600; color:`);
        console.log(`   %cVehicle Type:%c ${this.type}`, `text-decoration: underline; font-weight: 600;`, `color: green; font-weight: 600;`);
        console.log(`   %cManufacturer:%c ${this.manufacturer}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cModel:%c ${this.model}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cWheels:%c ${this.numberOfWheels}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`       %cSize:%c ${this.size}`, `font-weight: 700; text-decoration: underline; color: grey;`, `font-weight: 400;`);
        console.log(`       %cMiles per Gallon (MPG):%c ${this.milesPerGallon}`, `font-weight: 700; text-decoration: underline; color: grey;`, `font-weight: 400;`);
    }
}

// Create a child class called 'Motorcycle' with an additional property to determine that is has handlebars (Boolean) as well as another property to express that it has no doors (Boolean)
class Motorcycle extends Vehicle {
    constructor(type, manufacturer, model, numberOfWheels, hasHandlebars, hasDoors) {
        super(type, manufacturer, model, numberOfWheels);
        this.hasHandlebars = hasHandlebars; 
        this.hasDoors = hasDoors;
    }

    // Overwrite the inherited method called 'aboutVehicle' so that it logs a String to the console
    aboutVehicle() {
        console.log(`%cVia %cMotorcycle%c Child Class:`, `font-weight: 600;`, `font-weight: 900; text-decoration: underline;`, `font-weight: 600; color:`);
        console.log(`   %cVehicle Type:%c ${this.type}`, `text-decoration: underline; font-weight: 600;`, `color: green; font-weight: 600;`);
        console.log(`   %cManufacturer:%c ${this.manufacturer}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cModel:%c ${this.model}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cWheels:%c ${this.numberOfWheels}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`       %cHas Handlebars:%c ${this.hasHandlebars}`, `font-weight: 700; text-decoration: underline; color: grey;`, `font-weight: 400;`); 
        console.log(`       %cHas Doors:%c ${this.hasDoors}`, `font-weight: 700; text-decoration: underline; color: grey;`, `font-weight: 400;`); 
    }
}

// Instantiate 4 objects via the Vehicle parent class, Truck, Sedan and Motorcycle children classes
let hyundaiAccent = new Vehicle('Subcompact', 'Hyundai', 'Accent', 4);
let fordRanger = new Truck('Truck', 'Ford', 'Ranger', 4, 2, true);
let toyotaCamry = new Sedan('Sedan', 'Toyota', 'Camry', 4, 'Medium', 34);
let onyxCTY = new Motorcycle('Motorcycle', 'Onyx', 'CTY', 2, true, false);

// Log 4 instantiated objects to the console
console.log(hyundaiAccent);
console.log(fordRanger);
console.log(toyotaCamry);
console.log(onyxCTY);

console.log(`%c. . .`, 'color: grey; font-weight: 800; font-size: 12px;');

// Call the aboutVehicle() Method on each of the 4 instantiated objects
hyundaiAccent.aboutVehicle(); 
fordRanger.aboutVehicle(); 
toyotaCamry.aboutVehicle();
onyxCTY.aboutVehicle();

console.log(`%c. . .`, 'color: grey; font-weight: 800; font-size: 12px;');
console.log('%cEnd%c of scripts.js file!', 'font-weight: 900; color: blue;', 'font-weight: 400; color: blue;'); // Should log: End of scripts.js file!