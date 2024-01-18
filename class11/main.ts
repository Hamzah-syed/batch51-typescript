// class House {
//     readonly numberOfRooms: number;
//     readonly numberOfBathrooms: number;
//     constructor(nOfRooms: number, nOfBathrooms: number) {
//         // this // this = {}
//         this.numberOfBathrooms = nOfBathrooms
//         this.numberOfRooms = nOfRooms
//     }
//     doorBell() {
//       console.log('bell pressed'); 
//     }
// }

// // {numberOfBathrooms:4,numberOfRooms:2}
// let house1 = new House(4, 2);
// let house2 = new House(3, 1);
// house1.doorBell()
// house1.numberOfBathrooms = 10
// console.log(house1);
// console.log(house2);







// console.log(house1.numberOfRooms)

// let house2 = {
//     numberOfRooms: 4
// }
// let house3 = {
//     numberOfRooms: 4
// }
// let house4 = {
//     numberOfRooms: 4
// }



// Inheritance

// class Person {
//     name: string = 'okasha'
//     constructor(name: string) {
//         // this.name = name
//     }
// }


// class Person1 extends Person {
//     salary: number = 20000
//     // constructor(name: string, salary: number) {
//     //     // this.name = name
//     //     this.salary = salary
//     // }
// }
// class Person2 {
//     hobby: string
//     constructor(name: string, hobby: string) {
//         // this.name = name
//         this.hobby = hobby
//     }
// }
// let person1 = new Person1('bilal')
// console.log(person1);

// let person2 = new Person2('okasha', 'cricket')


class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Teacher extends Person {
    salary: number
    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary
    }
}

// class Student extends Person {
//     rollNo: string
//     constructor(name: string, age: number, rollNo: string) {
//         this.name = name
//         this.age = age
//         this.rollNo = rollNo
//     }
// }

let teacher = new Teacher('hamzah', 20, 20000)
console.log(teacher);

// let student = new Student("ali", 23, "123445")