// Creating arrays
// let setA = [1, 2, 3, 4, 5]; // in-line initialiazation...
// let setB = [
//   {
//       forecast: [
//           {
//               main: "clear",
//               description: "Sunny",
//               temp: 72
//           }
//       ]
//   }  
// ];

// let weather = setB[0];

// console.log(weather.forecast[0].temp);

// console.log(setB[0].forecast[0].main);

// /* Mini-Assignment - Create an array with nested objects that contain at least 1 array. */

// let recipe = [
//     {
//         name: "Prepare",
//         ingredients: [
//             "Bread",
//             "Peanut Butter",
//             "Jelly"
//         ],
//         description: "In this step, make sure you have the ingredients in hand."
//     },
//     {
//         name: "Collect",
//         ingredients: [
//             "Peanut Butter",
//             "Jelly"
//         ],
//         description: "In this step, we will take 1 tbps of each ingredient."
//     },
//     {
//         name: "Lather",
//         ingredients: [
//             "Bread",
//             "1 tbs Jelly",
//             "1 tbs Peanut Butter"
//         ],
//         description: "In this final step, we lather our tbs of peanut butter and jelly onto our slices of bread."
//     }
// ];

// // Accessing them
// let element1 = setA[4]; // use bracket notation to extract an element, at the given index starting from 0.

// console.log(element1);

// let total = 0;

// for(let i = 0; i < setA.length; ++i) {
//     let element = setA[i]; // use bracket notation, we use 'i' as our indexer

//     total += element; // we use the += compound operation to calculate the running total.
// }

// console.log(total);

// // Modifying them

// for(let i = 0; i < setA.length; ++i) {
//     let element = setA[i];

//     // modify the data...
//     element = element - 1;

//     // reassign the new value...
//     setA[i] = element;
// }

// setA[3] = 0;

// console.log(setA);

// let forecast = setB[0].forecast;
// forecast[0].temp = 90;

// console.log(JSON.stringify(setB));

// // Multidimensional arrays
// let plane = [ // array
//     [1], // element that is an array
//     [2],
//     [3],
//     [4],
//     ["Kevin", "Pacheco", 5], // an element that is an array with strings and a number
//     [ // an element that is an array...
//         [1, 2, 3] // whose element is an array with 3 elements
//     ]
// ];

// let setC = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // Accessing multidimensional arrays

// for(let i = 0; i < setC.length; ++i) {
//     let item = setC[i];

//     for(let j = 0; j < item.length; ++j) {
//         let value = setC[i][j];

//         console.log(value);
//     }
// }

// let center = setC[1][1]; // [ROW] [COL]

// console.log(center);

// let threeD = [
//     [
//         [1, 2, 3], [4, 5, 6], [7, 8, 9]
//     ],
//     [
//         [10, 11, 12],
//         [13, 14, 15],
//         [16, 17, 18]
//     ]
// ];

// let a = threeD[0][2][2]; // [ROW] [COL] [DEPTH] Tensors.

// console.log(a);

// ========== Array Methods
// let setA = [1, 2, 3, 4, 5];

// console.log(setA);

// // push(item) - Appends an item to the end of the array...
// console.log(`Before Length ${setA.length}, After Length ${setA.push(6)}, elements ${setA}`);

// // pop() - Removes the last item in the array, and returns that element.
// let lastItem = setA.pop();

// console.log(`The last item removed was ${lastItem}, elements ${setA}`);

// // shift() - Removes the first item in the array, and returns that element.
// let firstItem = setA.shift();

// console.log(`The first item removed was ${firstItem}, elements ${setA}`);

// // unshift(item) - Prepends an item to the start of the array...
// console.log(`Before Length ${setA.length}, After Length ${setA.unshift(10, 11, 12)}, elements ${setA}`);

// // reverse() (in-place) - Reverses the order of the elements in the original array.
// setA.reverse();

// console.log(setA);

// // reduce() - Allows you to iterate through an array and keep a running total.
// function reducer(total, value) {
//     return total + value;
// }

// let resultA = setA.reduce(reducer);

// console.log(resultA);

// let resultB = setA.reduce(
//     function(total, value) {
//         return total + value;
//     });

// console.log(resultB);

// // ES6
// let resultC = setA.reduce(
//     (total, value) => {
//         return total + value;
//     }
// );

// console.log(resultC);

// map()
let domain = [1, 2, 3, 4, 5];

// f(x) = x^2 + x - 1

function f(x) {
    return -x;
}

let resultA = domain.map(f);

//console.log(domain);

//console.log(resultA);

let resultB = domain.map(
    function(x) {
        return -x;
    }
);

//console.log(resultB);

// ES6
let resultC = domain.map(
    (x) => {
        return -x;
    }
);

//console.log(resultC);

// Domain { 1,2,3,4,5 } Codomain {-1, -2, -3, -4, -5}
// f: D -> C, f(x) 'map function' is f(x)=-x

let employees = [
    {
        name: "Kevin",
        eid: 12345
    },
    {
        name: "Bob",
        eid: 4321
    },
    {
        name: "Jane",
        eid: 1928
    },
    {
        name: "Alice",
        eid: 7483
    }
];

// slow way...
let e1 = `<li>${employees[0].name}</li>`;
let e2 = `<li>${employees[1].name}</li>`;

let html =
`<ul>
    ${e1}
    ${e2}
</ul>`;

//console.log(html);

// Faster way...
function employeeToListItem(employee) {
    return `<li>${employee.name}</li>`;
}

//let htmlListItems = employees.map(employeeToListItem);

// let htmlListItems = employees.map(
//     function(employee) {
//         return `<li>${employee.name}</li>`;
//     }
// );

let htmlListItems = employees.map(
    (employee) => {
        return `<li>${employee.name}</li>`;
    }
);

let reduced = htmlListItems.reduce(
    (acc, value) => {
        return acc + value;
    }
);

let unorderedListResult =
`
<ul>
${
    employees
    .map( // Map the employee data, into an array of HTML strings.
        (employee) => {
            return `<li>${employee.name}</li>`;
        }
    )
    .reduce( // Reduce the HTML string array into a single html string.
        (acc, value) => {
            return acc + "\n" + value;
        }
    )
}
</ul>
`;

console.log(unorderedListResult);

// Mini-Assignment - Use the map function map the employees array and display it
// using an unordered list.
// Then take that same data, and display it using a Table with 1 column.

// W3C (https://www.w3schools.com/jsref/jsref_map.asp)
// W3C (https://www.w3schools.com/html/html_tables.asp)
// W3C (https://www.w3schools.com/html/html_lists.asp)

/*
let employees = [
    {
        name: "Kevin",
        eid: 12345
    },
    {
        name: "Bob",
        eid: 4321
    },
    {
        name: "Jane",
        eid: 1928
    },
    {
        name: "Alice",
        eid: 7483
    }
];
*/