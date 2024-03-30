// Ways for printing Stetements in JavaScript
document.write("hello"); // Output via HTML during page load
console.log("Hello World!"); // Output in terminal (with NewLine at end) client-side JS
process.stdout.write("Hello World!!!"); //Output in terminal (without NewLine at end) server-side JS
alert("HEY!?"); //alert dialog box in browser

//Using Variables
var x = 10; //function-scoped
let y = 20; //block-scoped
const z = 30; //block-scoped, cannot be reassigned
a = 40; //in strict mode, will throw ReferenceError

//Data Types: 
// Primitive: String("", '', ``), Number, Boolean, Null, Undefined, Symbol
const name = "Alice";
const age = 30;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

//Composite: Object, Array, Function

//Operators: Arithmetic, Comparison, Logical, Assignment, Bitwise, Ternary
//Arithmetic: +, -, *, /, %, ++, --, **
//Comparison: ==, ===, !=, !==, >, <, >=, <=
//Logical: &&, ||, !
//Assignment: =, +=, -=, *=, /=, %=, **=
//Bitwise: &, |, ^, ~, <<, >>, >>>
//Ternary: ?: eg. (age >= 18) ? 'adult' : 'minor';

//Precedence and Associativity (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

//Control Structures (if, else, else if, switch, for, while, do while, break, continue)
