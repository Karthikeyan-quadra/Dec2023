//Type Aliases allow defining types with a custom name (an Alias).
//Type Aliases can be used for primitives like string or more complex types such as objects and arrays
// Type Aliases Example 1
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}
const carYear: CarYear = 2023;
const carType: CarType = "SUV";
const carModel: CarModel = "TATA Nexon";
const car = {
    carYear,
    carType,
    carModel
}
console.log(car);

// Type Aliases Example 2
type Name = string;
type Id = any;
type Department = string;
let Emp_name: Name = "Karthi";
let Emp_Id: Id = "C0000";
let Emp_dept = "CASG";
let Emp = {
    Emp_name,
    Emp_Id,
    Emp_dept
}
console.log(Emp);

//Interfaces are similar to type aliases, except they only apply to object types.
interface Person {
    name: string;
    age: number;
}
let person1:Person ={
    name: "Kumar",
    age:30
}
console.log(person1);

interface Gender extends Person{
    gender:string
}
let person:Gender ={
    name: "Kumar",
    age:30,
    gender:"Male"
}
console.log(person);


