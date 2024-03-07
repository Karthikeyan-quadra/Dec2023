// *String length
// let a = "abcdefghijkl";
// let length= a.length;
// console.log(length);

// *String slice()  
// *slice(start, end)
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);

//*String substring()
//*substring(start, end)
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(10, -13);
// console.log(part);
//The substring method is used on the string str. The substring method in JavaScript takes two parameters: the starting index and the ending index. In this case, the starting index is 10, and the ending index is -13.
// It's important to note that the substring method in JavaScript handles negative indices differently than some other programming languages. If the starting index is greater than the ending index, the substring method swaps them. So, effectively, it becomes str.substring(-13, 10).
// In JavaScript, when you provide a negative index to substring, it is treated as if it were 0. Therefore, it becomes str.substring(0, 10).

//*substr()
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 10);
// console.log(part);

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);
// let text1 = "hELLO World!";
// let text2 = text1.toLowerCase();
// console.log(text2);

//*JavaScript String trim()
// let text1 = "   yy   t  Hello World!    uu  ";
// let text2 = text1.trim();
// console.log(text2);

//Split
// let text = "a,b,c,d,e,f";
// const text2 = text.split(" ");
// console.log(text2);

//String Search Methods
// JavaScript String indexOf()
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log(index);

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:

//JavaScript String lastIndexOf()
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate", 22);
// console.log(index);

//JavaScript String includes()
let text = "Hello world, welcome to the universe.";
let text2 = text.includes("world");
console.log(text2);