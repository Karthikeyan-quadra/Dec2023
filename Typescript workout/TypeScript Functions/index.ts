//*In TypeScript, a function is a block of code that performs a specific task or set of tasks. Functions in TypeScript, like in JavaScript, can be declared using the 'function' keyword.

//Void Return Type
//*The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
  }
  printHello();

  //Parameters
  //*Function parameters are typed with a similar syntax as variable declarations.
  function multiply(a: number, b: number) {
    return a * b;
  }
  let c = multiply(5,2);
  console.log(c);

//Optional Parameters
//*By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
//the `?` operator here marks parameter `c` as optional.
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);// This line calculates the sum of three values: a, b, and c (or 0 if c is not provided).
  }
  console.log(add(6,5,2))

//Default Parameters
//*For parameters with default values, the default value goes after the type annotation
function div(a: number, b: number = 10) {
    return a / b;
  }
  console.log(div(15))

//Named Parameters
function divide({dividend, divisor}: {dividend:number, divisor:number}){
return dividend/divisor;
}
console.log(divide({dividend:10, divisor:5}));

//Type Alias
//*Function types can be specified separately from functions with type aliases.

// Define a type alias named Sum representing a function that takes two numbers and returns a number
type Sum = (x: number, y: number) => number;

// Declare a constant named 'addition' and assign an arrow function to it, adhering to the Sum type
const addition: Sum = (x, y) => x + y;

// Call the 'addition' function with arguments 4 and 5 and store the result in a variable 'result'
const result: number = addition(4, 5);

// Log the result to the console
console.log(result);

