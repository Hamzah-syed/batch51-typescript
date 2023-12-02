// let firstName = "Hamzah"
// let lastName = "Syed";


//               // True                  // False 
// if (firstName === "Hamzah" || firstName === "Okasha" ) {
//     console.log("You're not allowed")
// }

// else {
//     console.log("You're allowed")
// }

// function greet() {
//     console.log("Hello Hamzah")
// }

// function sum() {
//     console.log(2 + 2)
// }


// greet();
// sum();
// greet();


// function greet(name: string) {
//     console.log("Hello", name);
// }
// greet("Hamzah");
// greet("Ali");

//             5            10
// function sum(num1:number, num2:number){
//     console.log(num1 + num2)
// }


// sum(5, 10);


// function sum(num1: number, num2: number) {
//     // console.log(num1 + num2);
//     return num1 + num2;

// }

// //   15
// let ans = sum(5, 10); // 15

// function multiply(num1: number) {
//     console.log(num1 * 2)
// }
//         //15
// multiply(ans)







// multiply()



// let fruit1 = "Apple";
// let fruit2 = "Orange";
// let fruit3 = "Banana";
// let fruit4 = "Pineapple";

// let subjects:string[] = [ "Math", "Science", "English", "History"];
// let ages:number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let a = [true, false, true];

//              0         1         2          3  // Index number
// let fruits = ["Apple", "Orange", "Banana", "Pineapple"];

// console.log(fruits[1]);
// console.log(fruits[2], fruits[3] );


// let fruits = ["Apple", "Orange", "Banana", 4];


// let menu = ["Kofta", "Kheer", "Biryani", "Gajar ka Halwa"];

// let myFirstPopped = menu.pop();

// console.log(myFirstPopped);

// let pushedReturn = menu.push("Chicken Tikka", "Chicken Karahi");

// console.log(pushedReturn);

// menu.pop();

// console.log(menu);




// let menu = ["Kofta", "Kheer", "Biryani", "Gajar ka Halwa"];


// let shiftedElement = menu.shift();

// let len  = menu.unshift("Chicken Tikka");

// console.log(len);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);

// console.log(citrus);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let a = fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(a);

