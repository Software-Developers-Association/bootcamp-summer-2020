 // Your first ever JavaScript variable! ^_^
var myFirstVariable = 10;
// Your second ever JavaScript variable! Woooo!
var mySecondVariable = 5;
 // Your third ever JavaScript variable! You're a pro now!
var myThirdVariable = myFirstVariable + mySecondVariable;

console.log(myThirdVariable);

// Output: 15

/**
 * Adds two numbers a & b and returns the result.
 * @param {Number} a The left hand value.
 * @param {Number} b The right hand value.
 */
function add(a, b) {
    var result = a + b;

    return result;
}

// This will result in an undefined error,
// as result was defined in the add function
// and is locally scoped to that function.
console.log(result);

var result = add(10, 10);

console.log(result);

// Output: 20

// ======= let =======
let someVariable = 10;

// block-scope
{
    let someVariable = 20;
}

console.log(someVariable);

// Output:
// 10

// ======== const ========
const PI = 3.14;

{
    PI = 0;
}

PI = 1;

// Output:
// TypeError: invalid assignment to const `PI'