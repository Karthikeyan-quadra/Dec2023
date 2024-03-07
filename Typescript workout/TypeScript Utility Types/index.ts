//Partial
//*Partial changes all the properties in an object to be optional.
interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);

//Required 
//*Required changes all the properties in an object to be required.
interface Bike{
    make: string;
    model: string;
    mileage?: number;
}
let myBike: Required<Bike> = {
    make: "BMW",
    model: "Urban Rider",
    mileage: 20
}
console.log(myBike)

//Omit
//*Omit removes keys from an object type.
interface Bike{
    make: string;
    model: string;
    mileage?: number;
}
let myBikes: Omit<Bike, 'mileage'> = {
    make: "BMW",
    model: "Urban Rider",
}
console.log(myBikes)

//Pick
//*Pick removes all but the specified keys from an object type.
interface Bike{
    make: string;
    model: string;
    mileage?: number;
}
let myBikee: Pick<Bike, 'mileage'> = {
    mileage: 20
}
console.log(myBikee)

//Readonly
interface Car{
    make: string;
    model: string;
}
const cars: Readonly<Car> = {
     make: "TATA",
     model: "Harier"
}
console.log(cars);
// cars.make="jaguar"; will throw a error