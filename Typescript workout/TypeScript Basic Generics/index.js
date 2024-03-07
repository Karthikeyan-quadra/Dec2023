"use strict";
//TypeScript Basic Generics
//*Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
//*Generics makes it easier to write reusable code.
//Functions
function createPair(a, b) {
    return [a, b];
}
console.log(createPair('hello', 42));
console.log(createPair(45, true)); //reusable
// Example usage of the Pair type alias with specific types
let stringNumberPair = {
    first: 'one',
    second: 1
};
let booleanStringPair = {
    first: true,
    second: 'two'
};
console.log(stringNumberPair);
