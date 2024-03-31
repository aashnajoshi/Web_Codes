// Ways for printing Statements in JavaScript
document.write("hello"); // Output via HTML during page load
console.log("Hello World!"); // Output in terminal (with NewLine at end) client-side JS
process.stdout.write("Hello World!!!"); //Output in terminal (without NewLine at end) server-side JS
alert("HEY!?"); //alert dialog box in browser

//Using Variables
var x = 0; //function-scoped
let y = 10; //block-scoped
const z = 20; //block-scoped, cannot be reassigned
na = "Alice"; //in strict mode, will throw ReferenceError

//Data Types: 
// Primitive: String("", '', ``), Number, Boolean, Null, Undefined, Symbol
const greeting = `Hello, my name is ${na} and I am ${y} years old.`;

// Composite: Object {key: value}, Array [], Function
const obj = { name: na, age: y }; // Object
const arr = [x, y, z, a, na]; // Array
function greet(na) { return `Hello, ${na}!`; } // Function

//Operators: Arithmetic (+, -, *, /, %, ++, --), Comparison (==, ===, !=, !==, >, <, >=, <=), Logical (&&, ||, !), Assignment (, +=, -=, *=, /=, %=), Bitwise (&, |, ^, ~, <<, >>, >>>), Ternary (<Condition> ? <Expression1> : <Expression2>;)
(age >= 18) ? 'adult' : 'minor';

//Precedence (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

//Control Structures: Conditional(if-elseif-else, switch); Loops(for, while, do while); break, continue, return
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