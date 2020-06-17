/* Creating an Object */

/* Objects in Objects */

/* Intro to bad design */
let efName = "Kevin";
let eid = 1234;

// display...

let animal = {
    species: "UNKNOWN",
    size: {
        length: 10,
        width: 5,
        height: 10,
        units: 'metric'
    }
};

function makeSound(animal, sound) {
    console.log(`The animal species ${animal.species} goes ${sound}`);
}

//makeSound(animal, "moo");

/* Objects w/ Behaviours */
let cat = {
    name: "Lula",
    age: 16,
    sleep: function() {
        console.log(`The cat ${cat.name} goes Zzzzz...`);
    }
}

cat.sleep();

let cat2 = {
    name: "Meowth",
    age: 'old',
    sleep: () => {
        console.log(`The cat ${cat2.name} whose age is ${cat2.age} goes Zzzz...`);
    }
}

cat2.sleep();

/* Objects to Strings */
console.log(cat);
console.log(cat2);

console.log(JSON.stringify(cat));
console.log(JSON.stringify(cat2));

/* Intro to Object-Oriented Programming w/ JavaScript */
// We have to create a blueprint/cookie cutter to create
// our objects.
function Cat(name, age) {
    // Initialization...
    // Begin - Properties..
    this.name = name;
    this.age = age;
    // End - Properties...(technically...)

    // Begin - Methods/Behaviours...
    // this.sleep = function() {
    //     console.log(`The cat ${this.name} is ${this.age} years old and is now sleeping...`);
    // };

    // ES6 - Lambda expression...
    this.sleep = () => {
        console.log(`The cat ${this.name} is ${this.age} years old and is now sleeping...`);
    };
    // End - Methods/Behaviours...
}

let muffins = new Cat("Muffins", 10);
let tom = new Cat("Tom", 12);

muffins.sleep();
tom.sleep();

console.log(typeof muffins);
console.log(typeof tom);
console.log(typeof Cat);
console.log(JSON.stringify(muffins));

/* Functional Prototypes */
Cat.prototype.purr = function() {
    console.log("The cat goes purrrrrrr");
};

/* 'this' keyword */
Cat.prototype.purr2 = function() {
    console.log(`${this.name} goes purrrrr`);
};

muffins.purr2();
tom.purr2();

/* Mini Assignment */
/*
    Create a blueprint/cookie cutter/class using the functional method
    Then, add 2 methods using the prototype way.

    Employee:
    Attributes - Name, ID, salary, position
    Methods:
    - greet, "Hi, my name is NAME";
    - print, "Name: NAME ID: ID Salary: SALARY"

    Prototype
    - describe, "My name is NAME and I am a POSITION"
*/

/* class - ES6 */