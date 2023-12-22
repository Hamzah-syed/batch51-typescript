// export const a = "Hamzah";
// let a: string | number | boolean = "hamzah";
// a = 10
// a = "hamzah"
// a = true
// let age: number = 22;
// console.log(age.toFixed(10))
// let firstName: string = "Hamzah";
// firstName.toLowerCase()
// let age: string | number;
// age = 22
// age.toFixed(2); // Narrowing
// age = "22";
// let age: string | number = "22";
// console.log(typeof age);
let age = 2;
let tube = { diameter: 12, length: 3 };
// interface Ball {
//     diameter: number
// }
// let ball:Ball = { diameter: 10, length: 5 }; // Fresh - Can't provide extra properties
// ball = tube // Stale Object: Ignoring Extra properties 
let myType = { id: 2, name: "Tom" };
let myType2 = { id: 2, name: "Tom" };
//Case 1
myType = myType2;
export {};
