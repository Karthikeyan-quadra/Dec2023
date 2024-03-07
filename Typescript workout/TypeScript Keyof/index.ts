//*keyof is a keyword in TypeScript which is used to extract the key type from an object type.
//keyof with explicit keys
interface Person{
    name: string;
    age: number;
}
function Printperson(person:Person, property: keyof Person){
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
    name:"kumar",
    age:29
};
Printperson(person, "age",);

