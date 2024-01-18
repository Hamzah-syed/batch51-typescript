// function sum(num1: number, num2: number): number {
//     return num1 + num2;
// }
// let result = sum(3, 6);
// type Sum = (num1: number, num2: number) => number;
// let add: Sum = function (num1, num2) {
//     return num1 + num2;
// }
// let result = add('3', 6);
// console.log(result);
// Arrow Function
// let sum = (num1: number, num2: number): number => num1 + num2;
// let result = sum(3, 6); // 9
// console.log(result);
// let fullName = (firstName: string, lastName?: string) => {
//     if (lastName === undefined) {
//         return firstName
//     }
//     else {
//         return firstName + ' ' + lastName;
//     }
// };
// let fullN = fullName('Ali', 'khan'); 
// console.log(fullN);
// let fullName = (firstName: string, lastName = "Khan") => {
//     // console.log(firstName, lastName);
//     return firstName + ' ' + lastName;
// };
// let fullN = fullName('Hamzah'); // undefined    
// console.log(fullN);
// Rest Operator
// console.log("hello world")
// let makeMessage = (name: string, ...message: string[]) => {
//     console.log(message.join(" ")); 
// }
// makeMessage("Ali", "Hello", "World", "How", "are", "you")
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
//this is not part of the overload list, 
//so it has only three overloads
// function add(arg1: number, arg2: string): string; //option 1
// function add(arg1: string, arg2: number): string; //option 2
// function add(arg1: string, arg2: string): string; //option 2
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }
// add("hamzah", "syed");
// add(2, "Hamzah")
// add(2, 3)
// add("hamzah", 5)
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list, 
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }
// let result = add(4, 7);
// console.log(result);
// let fruits: [string, string, number] = ["Orange", "Mango", 2];
// fruits.push("Apple");
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userID",
        message: "please enter your userID"
    },
    {
        type: "number",
        name: "userPin",
        message: "please enter your userPin"
    }, {
        type: "list",
        name: "AccountType",
        choices: ["Current Account", "Saving Account"],
        message: "please select your account type"
    }, {
        type: "list",
        name: "transactionType",
        choices: ["fastCash", "withdraw"],
        message: "please select your transaction type"
    }, {
        type: "list",
        name: "amount",
        choices: [500, 1000, 5000, 10000],
        message: "please select your amount",
        when(answers) {
            return answers.transactionType === "fastCash";
        }
    }, {
        type: "number",
        name: "amount",
        message: "please enter your amount",
        when(answers) {
            return answers.transactionType === "withdraw";
        }
    },
]);
if (answers.userID && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    const enteredamount = answers.amount;
    if (enteredamount <= balance) {
        const remaining = balance - enteredamount;
        console.log(`${enteredamount} withdraw sucessful.. and your remaining balance is ${remaining}`);
    }
}
