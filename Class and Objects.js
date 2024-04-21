// Template Literals
// Class and Objects
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// By Using Template Literals
console.log(`Fifteen is ${a+b} 
not ${2*a*b}`);

console.log(`a and b value is ${a} 
and ${b}`)

// Template Literals
// Class and Objects
// OOP:
// Object Oriented Programming Language.
// Abstraction, Encapsulation,Inheritance, Polymorphism.

// Abstraction: Hiding the Implementation details from the user...
// Encapsulation: Protection or protecting the information
//Inheritance: parent and child..
//Polymorphism:

//class and objects...
// A class is treated as the blue-print 
// It consist of properties, methods...etc..
// Syntax: class classname{
    
// }
// objects
// It is an Instance of a class
// its a restricted Object..
class Car{
    constructor(color,brand){
        this.color = color;
        this.brand = brand;
    }
    get_color(){
    return this.color;
    }
}
var c1 = new Car("Black","Audi");
var c1 = new Car("Blue","Audi");
// new is a inbuilt keyword
// An Object  will be created everytime whenever there is a new keyword..

// Now to store the data inside the Object we need constructor
// Constructor is a special way of assigning values to the Objects...

//this:
// this is a temproray keyword which will be pointed to freshly created Object...

var res = c1.get_color();
console.log(` ${res}`);
console.log(c1);

//method: