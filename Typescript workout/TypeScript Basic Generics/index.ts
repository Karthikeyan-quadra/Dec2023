//TypeScript Basic Generics
//*Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
//*Generics makes it easier to write reusable code.

//Functions
function createPair<S, T>(a:S, b:T){
    return [a,b];
}
console.log(createPair<string, number>('hello',42));
console.log(createPair<number, boolean>(45, true));//reusable

//Type Aliases
// Generic type alias for a Pair
type Pair<S, T> = {
    first: S;
    second: T;
};

// Example usage of the Pair type alias with specific types
let stringNumberPair: Pair<string, number> = {
    first: 'one',
    second: 1
};

let booleanStringPair: Pair<boolean, string> = {
    first: true,
    second: 'two'
};
console.log(stringNumberPair)