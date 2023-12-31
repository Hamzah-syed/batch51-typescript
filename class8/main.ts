// // type Children = {
// //     name: string,
// //     age: number
// // }


// // type Person = {
// //     name: string;
// //     age: number;
// //     email: string;
// //     children?: Children
// // }



// // const person: Person = {
// //     name: "Usman",
// //     age: 23,
// //     email: "usman@gmail.com",
// //     children: {
// //         name: "Faheem",
// //         age: 15,
// //     },
// // }


// // const person2: Person = {
// //     name: "tayyab",
// //     age: 44,
// //     email: "tayyab@gmail.com"
// // }

// // const child: Children = {
// //     name: "faheem",
// //     age: 44
// // }



// // type Person = {
// //     name: string;
// //     age: number;
// //     email: string;
// // }

// // let person1: Person = { // Fresh Object
// //     name: "ali",
// //     age: 22,
// //     email: "ali@gmail.com",
// //     // a:"sad" // No extra property Allowed
// // }


// // let person2 = { // Fresh Object
// //     name: "hamzah",
// //     age: 22
// // }

// // person2 = person1; // person1 is a Stale Object 

// // console.log(person2.name)


// type Student = {
//     name: string,
//     rollNumber: string
// }


// // type Teacher = {
// //     name: string,
// //     experience: number
// // }

// // let std1: Student = {
// //     name: "Faheem",
// //     rollNumber: "PIAIC123",
// // }

// // let teacher1: Teacher = {
// //     name: "Zia",
// //     experience: 10,
// // }

// // let both: Student | Teacher = {
// //     name: "Hamzah",
// //     experience: 2,
// //     rollNumber: "213"
// // }


// // let both: Student & Teacher = {
// //     experience: 22,
// //     name: "Hifza",
// //     rollNumber: "PIAIC321"
// // }

// // both.rollNumber


// // let a: any = 10;
// // let b: boolean = true;

// // a = "Hello World"
// // a = b;
// // a = b;
// // b = a;



// // let a: unknown = "hello world";
// // let b: unknown = "Hamzah";

// // a = 10;
// // a = true;
// // a = {}

// // a = b

// // b = a


// // let a: string = "hello world";

// // if (typeof a === "string") {
// //     console.log(a)
// // } else {
// //     console.log(a);
// // }



// // let a: unknown;

// // a = "Hamzah" as string;

// // a


// // let myname: unknown = "Zia";
// // console.log((myname as string).toUpperCase());

// // myname


// // let a: string = "hamzah";
// // let b: unknown = 22;

// // a = b as number;


// // let meetingDay: string = "mondayy"

// // if (meetingDay === "Sunday") {
// //     console.log("No meeting")
// // } else if (meetingDay === "mondy") {
// //     console.log("Meeting at 10:00 AM")
// // }
// //  ........


// // enum

// let days: "monday" | "tuesday" /// ...

// enum Days {
//     Sunday, // 0
//     Monday, // 1
//     Tuesday, // 2
//     Wednesday,// 3
//     Thursday, // ...
//     Friday,
//     Saturday
// }

// let meetingDay: Days = Days.Monday;


// if (meetingDay === Days.Monday) {
//     console.log("Meeting at 10:00 AM")
// } else if (meetingDay === Days.Sunday) {
//     console.log("No meeting")
// }











// enum Operator {
//     Add,
//     Sub,
//     Mul,
//     Div
// }
// let cal : Operator = Operator.Add
// if (cal === Operator.Add){
//     console.log(2 + 2)
// } 


// const enum Color1 {Red = 1, Green, Blue};
// var colorName: number = Color1["Green"];
// console.log(colorName);


// let fruits:string[] = ["Apple", "Orange", "Banana"];


type Person = {
    name: string;
}

// let p1:Person = {
//     name: "hamzah"
// }

// let p:Person[] = [
//     {
//         name: "Hamzah"
//     },
//     {
//         name: "Usman"
//     },
//     {
//         name: "Faheem"
//     }
// ]
// console.log(p[1].name)

import inquirer from "inquirer";

let systemgenerateno = Math.floor(Math.random()*10+1)
let answer:{
    userguess:number
} = await inquirer.prompt({
    type:"number",
    name:"userguess",
    message:"guess the number between 1 to 10"
})

if (answer.userguess === systemgenerateno){
    console.log("you win")
}else{
    console.log("oops you lose correct was ",systemgenerateno)
}