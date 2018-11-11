# Object Oriented Programming Drills

## Objectives

1. Write object literals and get values of that objects properties.
2. Practice instantiation of objects using JavaScript.
3. Practice pseudo-classes.
4. Create methods.
5. Practice class inheritance.

## Object Literals, Pseudo Classes and methods

1. Write 5 object literals, have them named person1 - person5.  
    * Give each a name property and have this be a name of a friend or family member.  
    * Then give each one a second property, `sayHello`, which is a function that will log a string to the console like this:
```js
Hello! My name is ___.
```
2. Call the `sayHello()` function on each object and check the console.
    * This seems kind of repetitive doesn't it?  
    Yeah, let’s practice some pseudo classes. 
    * Create a constructor function that will take a name, an age and a city.
    * **Remember**: Pseudo-classes look like functions, but are named with starting with a capital letter.
3. Write a method that will log a string to the console like this:  
```js
Hey! My name is ___ I am ___ years old and live in ___.
```
4. Create 5 instances of the same friends from earlier, except this time use the pseudo-class and `sayHello()` method we just created.
5. Using the ES6 syntax makes object oriented programming in Javascript much easier to understand.  
Let’s use the ES6 syntax and create the same class that we just did.  
    * **Hint**: ES6 classes are not made using a constructor function, they use a keyword: class.  
    * They have a constructor which is used to take in the parameters name, age and city (methods will not need to be prototypes)!

## Inheritance

1. Create a class called Vehicle (not every vehicle is a truck, nor is it a sedan, motorcycle, or coupe).
    * Let’s define a vehicle in a way that we can use inheritance to determine if it is a truck, sedan, or motorcycle.
    * All vehicles have wheels, some have 2 some have 4. 
    * Not all have doors, and not all have reverse.
    * So to keep it simple lets have this vehicle class construct an object that only has the properties manufacturer and number of wheels.

2. Include a method called `aboutVehicle`, have it log a string to the console which states the following:
    * What type of vehicle it is.
    * Who made it.
    * How many wheels it has.

3. Trucks are vehicles, they have wheels.  
    * So let’s create a vehicle class that inherits the property of wheels from vehicle, but trucks have doors (unlike motorcycles) and they have a truck bed. 
    * So let’s add a number of doors property to this object as well as a boolean so that if the value is true, it has a truck bed.

4. Now sedans are vehicles also, but they don’t have a truck bed (we are ignoring the fact El Caminos broke this rule), they do have doors as well as 4 wheels. 
    * So to practice inheritance, lets just say sedans are vehicles, they aren’t trucks because they don’t have a truck bed but they get good gas mileage. 
    * Create a class sedan which extends vehicle, give it an additional property of size which could be small or medium, and give it a property of MPG.

5. Motorcycles are also vehicles, but they don’t have doors, or 4 wheels, or go in reverse (technically). 
    * So create a class motorcycle that extends vehicle, have it include a property to determine that it has handlebars and not a steering wheel, as well as another property to show it has no doors.

5. Each child class inherited the method which was created in vehicle, but each child class now has other specific features which define it. 
    * Update the method in each child class to console log a string that represents these features, but still have it tell is the type, manufacturer and how many wheels it has!