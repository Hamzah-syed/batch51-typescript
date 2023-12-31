// // type Children = {
// //     name: string,
// //     age: number
// // }
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
let systemgenerateno = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt({
    type: "number",
    name: "userguess",
    message: "guess the number between 1 to 10"
});
if (answer.userguess === systemgenerateno) {
    console.log("you win");
}
else {
    console.log("oops you lose correct was ", systemgenerateno);
}
