"use strict";
let pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);
let myBike = {
    make: "BMW",
    model: "Urban Rider",
    mileage: 20
};
console.log(myBike);
let myBikes = {
    make: "BMW",
    model: "Urban Rider",
};
console.log(myBikes);
let myBikee = {
    mileage: 20
};
console.log(myBikee);
const cars = {
    make: "TATA",
    model: "Harier"
};
console.log(cars);
// cars.make="jaguar"; will throw a error
