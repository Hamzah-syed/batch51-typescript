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

let age: string | number = 2;

// Wrong method
// if (typeof age === "string") {
//     age.toUpperCase()
// } else {
//     age.
// }


// console.log(Math.random())

// let newAge = Math.random() > 0.5 ? 22 : "Khan";

// if (typeof newAge === "string") {
//     newAge.toUpperCase()
// } else {
//     newAge.toFixed(2)
// }

// let trafficLights: "yellow" | "red" | 3 = 3;

// trafficLights = 3;



// let teacher: {
//     name: string,
//     salary: number,
//     "full-name": string
// } = {
//     name: "Hamzah",
//     salary: 20000,
//     "full-name": "Hamzah Syed"
// }

// teacher.name // Hamzah

// console.log(teacher["full-name"])



// let teacher: { name: string, exp: number } = {
//     name: "Zeeshan",
//     exp: 10
// }

// // type Student = string | boolean | number | undefined

// // let b: string | boolean | number | undefined;
// let a: Student;
// let b: Student;



// type Student = {
//     name: string,
//     age: number
// }

// let student1: Student = {
//     name: "Hamzah",
//     age: 22
// }

// let student2: Student = {
//     name: "Zeeshan",
//     age: 22
// }


// import inquirer from "inquirer";
// let answer = await inquirer.prompt([{
//     type:'number',
//     name:'num1',
//     message:'enter your first number'
// },
// {
//     type:'number',
//     name:'num2',
//     message:'enter your last number'
// },
// {
//     type:'list',
//     name:'operator',
//     message:'enter your operator',
//     choices:['add','sub','multiply','divide']
// }])



// if(answer.operator === 'add'){
//     console.log(answer.num1 + answer.num2);
// }

// console.log(answer);


// interface Deal1  {
//     food: string,
// }

// type Deal2 = {
//     food: string,
//     drink: string
// }


// let hamzahOrder: Deal1 = {
//     food: "Biryani"
// }

// let okashaOrder: Deal2 = {
//     food: "Biryani",
//     drink: "Coke"
// }

// let a = 22
// let b = "22"
// a = b // Error

// console.log(a) // "22"


// hamzahOrder = okashaOrder; // NO ERROR

// okashaOrder = hamzahOrder; // ERROR - MISSING PROPERTY


// interface Ball {
//     diameter: number;
// }

// interface Sphere {
//     diameter: number;
// }

// type Tube = {
//     diameter: number;
//     length: number;
// }

// let ball: Ball = { diameter: 10 };
// let sphere: Sphere = { diameter: 20 };

// sphere = ball;
// ball = sphere;


type Tube = {
    diameter: number;
    length: number;
}

let tube: Tube = { diameter: 12, length: 3 };




// interface Ball {
//     diameter: number
// }

// let ball:Ball = { diameter: 10, length: 5 }; // Fresh - Can't provide extra properties

// ball = tube // Stale Object: Ignoring Extra properties 


let myType = { id: 2,  name: "Tom" };
let myType2 = { id: 2,  name: "Tom" };

//Case 1
myType = myType2;