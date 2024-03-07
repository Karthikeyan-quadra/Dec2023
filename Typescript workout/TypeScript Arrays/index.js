"use strict";
//TypeScript Arrays
const names = [];
names.push("karthi");
console.log(names);
//Readonly
//*The readonly keyword can prevent arrays from being changed.
const bikes = ["BMW", "TVS"];
// bikes.push("Bajaj"); throws a error
console.log(bikes);
//Type Inference
//*TypeScript can infer the type of an array if it has values.
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2");  Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let count = numbers[3]; // no error
console.log(count);
