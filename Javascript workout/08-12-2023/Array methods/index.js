//*JavaScript Array length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size);

//*JavaScript Array toString()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.toString();
// console.log(a, typeof a);
// let b=fruits.join("*");
// console.log(b, typeof b);

//*JavaScript Array pop()
//The pop() method removes the last element from an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.pop();
// console.log(a);

//*JavaScript Array push()
//The push() method adds a new element to an array (at the end):
//The push() method returns the new array length:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.push("Kiwi");
// console.log(a);
// console.log(fruits);

//*JavaScript Array shift()
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.shift();
// console.log(a);

//*JavaScript Array unshift()
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits.unshift("Lemon");
// console.log(fruits);

//*JavaScript Array length
//The length property provides an easy way to append a new element to an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a = fruits[fruits.length] = "Kiwi";
// console.log(a);

//*Merging (Concatenating) Arrays
// const a = [ 1, 3, 5, 7];
// const c = [2, 4, 6]
// const b = a.concat(c);
// console.log(b);

//*JavaScript Array splice()
//*The splice() method can be used to add new items to an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a=fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

//*JavaScript Array slice()
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);
