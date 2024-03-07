//TypeScript Tuples
//*A tuple is a typed array with a pre-defined length and types for each index.
//*Tuples are great because they allow each element in the array to be a known type of value.
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding'];
// ourTuple = [false, 'Coding God was mistaken', 5]; initialized incorrectly which throws an error
console.log(ourTuple);

//Readonly Tuple
//*A good practice is to make your tuple readonly.
const a: readonly[number, boolean, string] = [5, true, "Good day"];
// a.push("45"); throws error as it is readonly.
console.log(a);

