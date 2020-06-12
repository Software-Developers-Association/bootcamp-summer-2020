// Java: Integer (int), Boolean (boolean), Character (char), String, Object, Double (double), Float (float)
// JavaScript: Number (ints, floats, doubles), Strings, Boolean, Objects (JavaScript Object Notation JSON)
// Arrays

// let number1 = 10;
// let number2 = 10.1;
// let number3 = 1E-5; // Scientific Notation

// console.log(number1); // Integer
// console.log(number2); // Treated as a floating point number...
// console.log(number3); // treated as a big number...

// let string1 = "Let's create a \"quote\"";
// let string2 = 'Let\'s create a "quote"';
// let string3 = `Let's create a "quote"`;

// console.log(string1);
// console.log(string2);
// console.log(string3);

//let username = "kevin";

//let greeting = "Hello, " + username + "!"; // contatination
//let greeting = 'Hello, ' + username + '!'; // contatination
//let greeting = `Hello, ${username}!`; // Uses substitutation aka string injection.

//console.log(greeting);

// let value1 = 10;
// let value2 = 2;
// let value3 = 3;

// // are ALL the numbers even...
// let isEven = (value1 % 2 == 0) && (value2 % 2 == 0) && (value3 % 2 == 0);
// // is there at least ONE even number...
// let hasEven = (value1 % 2 == 0) || (value2 % 2 == 0) || (value3 % 2 == 0);

// console.log(isEven);
// console.log(hasEven);

// let isTrue = true && true && true && true && true && true && false; // && means both sides MUST be true...
// let hasTrue = false || false || false || false || false || false; // || means at least ONE side must be true...

// // if-statement is a CONDITIONAL.
// if(isTrue) {
//     // true-block
    
//     // code that will run ONLY if the conditiion is true...
//     console.log("Everything is true...");
// } else {
//     // false-block

//     // code that will run ONLY if the confition is FALSE OR all other options have been exhausted...
//     console.log("There is at least 1 thing that is not true...");
// }

// if(hasTrue) {
//     // true-block

//     console.log("There is at least 1 thing that is true...");
// } else {
//     console.log("Everthing is false...");
// }

// Display: Your first name, last name (use contatination...)
// Display: Your age (use string injection)

// Display: True, if your age is even, false otherwise..

// let firstName = "Kevin";
// let lastName = "Pacheco";
// let age = 26;

// let fullName = firstName + " " + lastName;

// console.log("My full name is " + fullName);

// console.log(`My age is ${age}.`);

// // conditions (true/false) ? TRUE STUFF : FALSE STUFF;

// console.log(age % 5 == 0 ? console.log("Is divisable") : console.log("Is not divisable"));
// console.log(age % 2 == 0);

// if(age % 2 == 0) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// JSON
// let employeeID = 1234;
// let employeeFName = "Kevin";
// let employeeLName = "Pacheco";
// let employeeSalary = 10;

// function printEmployee(id, fname, lname, salary) {
//     console.log(`EID: ${id} FName: ${fname} LName: ${lname} Salary: ${salary}.`);
// }

// printEmployee(employeeID, employeeFName, employeeLName, employeeSalary);

// DRY: Don't Repeat Yourself

/**
 * {
 *      key1: value1,
 *      key2: value2,
 *      key3: {
 *          key1: value1,
 *          key2: value2,
 *          ...
 *      }
 * }
 */

let kevin = createEmployee("Kevin", "Pacheco", 10);
let bobDylan = createEmployee("Bob", "Dylan", 15);

function createEmployee(fName, lName, salary) {
    return {
        eid: 0,
        fName: fName,
        lName: lName,
        salary: salary
    };
}

function printEmployee(employee) {
    console.log(`EID: ${employee.eid} FName: ${employee.fName} LName: ${employee.lName} Salary: ${employee.salary}.`);
}

printEmployee(kevin);
printEmployee(bobDylan);

// Arrays
let setA = [1, 2, 3, 4, 5, "Kevin"];

let output = "";

for(let i = 0; i < setA.length; ++i) {
    let element = setA[i];
    
    output += element;
}

console.log(output);

let employees = [ kevin, bobDylan ];

employees.push(createEmployee("John", "Doe", 10));

let jane = createEmployee("Jane", "Doe", 20);

employees.push(jane);

let bob = createEmployee("Bob", "Builder", 20);

employees.push(bob);

for(let i = 0; i < employees.length; ++i) {
    let employee = employees[i];

    printEmployee(employee);
}