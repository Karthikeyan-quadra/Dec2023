"use strict";
function Printperson(person, property) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
    name: "kumar",
    age: 29
};
Printperson(person, "age");
