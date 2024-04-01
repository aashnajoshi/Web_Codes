// Ways for printing Statements in JavaScript
document.write("hello"); // Output via HTML during page load
console.log("Hello World!"); // Output in terminal (with \n at end) client-side JS
process.stdout.write("Hello Tech_World!!!"); //Output in terminal (without \n at end) server-side JS

//Using Variables
var x = 0; //function-scoped
let y = 10; //block-scoped
const z = 20; //block-scoped, cannot be reassigned
na = "Alice"; //in strict mode, will throw ReferenceError

//Data Types: 
// Primitive: String("", '', ``), Number, Boolean, Null, Undefined, Symbol
const greeting = `Hello, my name is ${na} and I am ${y} years old.`;

// Composite: Object {key: value}, Array [], Function, RegExp
const obj = { name: na, age: y }; // Object
const arr = [x, y, z, a, na]; // Array

//Operators: Arithmetic (+, -, *, /, %, ++, --), Comparison (==, ===, !=, !==, >, <, >=, <=), Logical (&&, ||, !), Assignment (, +=, -=, *=, /=, %=), Bitwise (&, |, ^, ~, <<, >>, >>>), Ternary (<Condition> ? <Expression1> : <Expression2>;)
(age >= 18) ? 'adult' : 'minor';

//Precedence (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
//Scopes: Global, Local (Function, Block), Lexical (Nested), Module (import/export, require)
//Data Protection: Public, Private, Protected

//Control Structures: Conditional(if-elseif-else, switch); Loops(for, while, do while); break (exits loop), continue (re-loops), return (exits function)
//Conditional (if, else-if, else)
if (x === 0) {
    console.log("The variable is 0");
}
else if (x === -1) {
    console.log("The variable is -1");
}
else if (x === 1) {
    console.log("The variable is 1");
}
else {
    console.log("The variable is not 1, -1 or 0");
}
//Conditional (switch)
let grade = 'A';
switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Fair");
        break;
    case 'D':
        console.log("Poor");
        break;
    default:
        console.log("Invalid grade");
}

//Loops (for)
for (; x < 5; x++) {
    console.log(x);
}
//for-in
for (i in arr) {
    console.log(arr[i]);
}
//for-each
arr.forEach(x => console.log(x));
//Loops (while)
while (x < 5) {
    console.log(x);
    x++;
}
//Loops (do while)
do {
    console.log(x);
    x++;
} while (x < 5);

//RegExp: Regular Expressions (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
var regex1 = /[a-b]*/; //RegExp Literal
var regex2 = RegExp('[a-b]*'); //RegExp Object
var regex3 = new RegExp('[a-b]*'); //RegExp Constructor
//Modifiers: i (case-insensitive match), g (global match), m (multiline match)
//Methods: exec(), test(), match(), search(), replace(), split()

//eg. For each condition, use the following rules: 1. Length: .{ 6,} (Minimum 6 characters); 2. Uppercase letter: .* [A - Z](A - Z); 3. Lowercase letter: .* [a - z](a - z); 4. Numeric digit: .*\d(0 - 9); 5. Special Character: .* [\W](any character other than { 0-9, a- z, A - Z})

var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{6,}$/;

//OOPS using JavaScript: prototype-based and class-based

//Prototype-based
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function () {
    return `Hello, ${this.name}!`;
}
//Class-based
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}
//Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying`;
    }
}
//Encapsulation
class Account {
    #balance = 0;
    get balance() {
        return this.#balance;
    }
    set balance(value) {
        this.#balance = value;
    }
}
//Polymorphism
class Animal {
    speak() {
        return "Animal speaks";
    }
}
class Dog extends Animal {
    speak() {
        return "Dog barks";
    }
}
//Abstraction
class Shape {
    constructor(color) {
        this.color = color;
    }
    draw() {
        return "Shape is drawn";
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    draw() {
        return "Circle is drawn";
    }
}

//Object Notation: JSON.stringify(), JSON.parse()
//Functional Programming: Pure Functions, Immutability, Higher-Order Functions, Recursion, Currying, Partial Application, Monads
function greet(na) { return `Hello, ${na}!` }; //Pure Function
const greet = (na) => { `Hello, ${na}!` }; //arrow function
const newArr = [...arr, 4]; //immutability
//higher-order function
function greet(name) {
    return `Hello, ${name}!`;
}
function greetUser(greet, name) {
    return greet(name);
}
//recursion
function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}
//Currying(take 1 arg, returns new func with 1 arg): compose(), pipe(), Libraries (Ramda, Lodash)
function add(a) {
    return function (b) {
        return a + b;
    }
}
const compose = (f, g) => x => f(g(x));
const pipe = (f, g) => x => g(f(x));
//partial application
function add(a, b) {
    return a + b;
}
const add5 = add.bind(null, 5);

//JavaScript in Web Development: 
// Window, DOM(Document Object Model), BOM(Browser Object Model)

//Window Object: alert(), confirm(), prompt(), open(), close(), setTimeout(), setInterval()
alert("HEY!?"); //alert dialog box
confirm("Are you sure?"); //confirm dialog box
prompt("Enter your name:"); //prompt dialog box
open("http://www.google.com"); //opens a new window
close(); //closes the current window
setTimeout(() => console.log("Hello"), 1000); //executes the function after 1 second
setInterval(() => console.log("Hello"), 1000); //executes the function every 1 second

//DOM: document, getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), querySelectorAll(), createElement(), appendChild(), removeChild(), replaceChild(), innerHTML, textContent, style, classList, addEventListener()
document.getElementById("demo"); //get element by id
document.getElementsByClassName("demo"); //get elements by class name
document.getElementsByTagName("p"); //get elements by tag name
document.querySelector("#demo"); //get element by CSS selector
document.querySelectorAll(".demo"); //get elements by CSS selector
document.createElement("p"); //create element
document.appendChild(p); //append element
document.removeChild(p); //remove element
document.replaceChild(p, q); //replace element
document.getElementById("demo").innerHTML = "Hello"; //set inner HTML
document.getElementById("demo").textContent = "Hello"; //set text content
document.getElementById("demo").style.color = "red"; //set style
document.getElementById("demo").classList.add("highlight"); //add class
document.getElementById("demo").addEventListener("click", () => console.log("Hello")); //add event listener

//BOM: navigator, screen, history, location, localStorage, sessionStorage, cookies
console.log(`browser information:${navigator.userAgent}`); // browser information
console.log(`screen resolution:${screen.width}x${screen.height}`); // screen resolution
console.log(`history length:${history.length}`); // history length
console.log(`current URL:${location.href}`); // current URL
localStorage.setItem("name", "Alice"); // set item
localStorage.getItem("name"); // get item
localStorage.removeItem("name"); // remove item
localStorage.clear(); // clear all items
sessionStorage.setItem("name", "Alice"); // set item
sessionStorage.getItem("name"); // get item
sessionStorage.removeItem("name"); // remove item
sessionStorage.clear(); // clear all items
cookies = "name=Alice; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/"; // set cookie
document.cookie; // get cookie

//Asynchronous JavaScript: Callbacks, Promises, Async/Await, Fetch API
//Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 2000);
}
fetchData((data) => console.log(data));
//Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}
fetchData().then((data) => console.log(data));
//Async/Await
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}
(async () => {
    const data = await fetchData();
    console.log(data);
})();
//Fetch API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data));

//Error Handling: try-catch-finally, throw, Error Object
//Event Handling: addEventListener(), removeEventListener(), Event Object

//eventlistener: load, click, keypress, focus
document.addEventListener("load", () => console.log("Page loaded")); //load event
document.addEventListener("click", () => console.log("Clicked")); //click event
document.addEventListener("keypress", () => console.log("Key pressed")); //keypress event
document.addEventListener("focus", () => console.log("Focused")); //focus event

//JavaScript is a programming language and ECMAScript is a standard
//ECMAScript transpilers: Babel (webpack), TypeScript, CoffeeScript
//ECMA5-10: ES5(2009), ES6(2015), ES7(2016), ES8(2017), ES9(2018), ES10(2019)