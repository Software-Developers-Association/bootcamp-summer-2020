const express = require('express'); // Bring in the express class
const app = express(); // Invoke the express function...to create the app object
const Joi = require('joi'); // Use the Joi JSON validation module

const port = process.env.PORT || 3000;

app.use(express.json()); // we activate JSON middle ware

// Faux database
const students = [];

/**
 * Gets the student by Id, returns a student if found, otherwise
 * returns undefined.
 * @param {String} id 
 * @returns {Student}
 */
function getStudentById(id) {
    let student = undefined;

    for(let i = 0; i < students.length; ++i) {
        if(students[i].id === id) {
            student = students[i];

            // stop looping, we found it...
            break;
        }
    }

    return student;
}

// 10 ? '10'
// if you want to care only about the value...
// 10 == '10' would return TRUE, because we are only checking the value...

// 10 ? '10' (Left Side Number Right Side is a String)
// if you want to make sure the value AND the type is the same...
// 10 === '10' would return FALSE, because Number is not the same as a String....

function createStudentId() {
    // Kick off by creating a random number that
    // will serve as the student ID
    let studentId = Math.floor(Math.random() * 999999);

    studentId = studentId.toString().padStart(6, '0');

    // Make sure we generate a valid unique student ID number...
    while(getStudentById(studentId) !== undefined) {
        // Keep generating a new random ID until
        // it becomes unique
        studentId = Math.floor(Math.random() * 999999);

        studentId = studentId.toString().padStart(6, '0');
    }

    return studentId;
}

app.get('/students', (req, res) => {
    // override here...
    res.setHeader('Content-Type', 'application/json');

    if(Object.hasOwnProperty.bind(req.query)('id')) {
        const student = getStudentById(req.query.id);

        if(student === undefined) {
            res.statusCode = 400;

            const result = {
                message: `Could not find student with Id ${req.query.id}`,
                code: res.statusCode
            };

            res.write(JSON.stringify(result));
        } else {
            res.statusCode = 200;

            const result = {
                message: 'Success',
                code: res.statusCode,
                student: student
            };

            res.write(JSON.stringify(result));
        }
    } else {
        res.statusCode = 200;

        const result = {
            message: 'Success',
            code: res.statusCode,
            students: students
        };

        res.write(JSON.stringify(result));
    }

    res.end();
});

app.post('/old', (req, res) => {
    // Set the header
    res.setHeader('Content-Type', 'application/json');

    // Data Validation

    // Check if the name parameter does not exist...
    if(Object.hasOwnProperty.bind(req.query)('name') == false) {
        const result = {
            message: `"name" is a required parameter`,
            code: res.statusCode = 400
        };

        res.write(JSON.stringify(result));

        // Short-Circuit the IF statement by returning...
        return res.end();
    } else {
        // Check if the name parameter is empty...
        if(req.query.name === '') {
            const result = {
                message: `"name" cannot be empty`,
                code: res.statusCode = 400
            };

            res.write(JSON.stringify(result));

            // Short-Circuit the IF statement by returning...
            return res.end();
        }
    }

    // Check if the major parameter does not exist
    if(Object.hasOwnProperty.bind(req.query)('major') == false) {
        const result =  {
            message: `"major" is a required parameter`,
            code: res.statusCode = 400
        };

        // Short-Circuit the IF statement by returning...
        return res.end(JSON.stringify(result));
    } else {
        if(req.query.major === '') {
            const result = {
                message: `"major" cannot be empty`,
                code: res.statusCode = 400
            };

            // Short-Circuit the IF statement by returning...
            return res.send(JSON.stringify(result)).end();
        }
    }

    // Create a new student object...
    const student = {
        id: createStudentId(),
        name: req.query.name,
        major: req.query.major
    }

    // We have to add it now to the Faux DATABASE..
    students.push(student);

    // Let the client know everything went OK
    // and return the newly created student
    const result = {
        message: `Success`,
        code: res.statusCode = 200,
        student: student
    };

    res.end(JSON.stringify(result));
});

app.post('/students', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const schema = {
        name: Joi.string().required(),
        major: Joi.string().required()
    };

    const error = Joi.validate(req.body, schema).error;

    if(error !== null) {
        const result = {
            message: error.message,
            code: res.statusCode = 400
        };

        return res.send(JSON.stringify(result)).end();
    }

    const student = {
        id: createStudentId(),
        name: req.body.name,
        major: req.body.major
    };

    students.push(student);

    const result =  {
        message: "Success",
        code: res.statusCode = 200,
        student: student
    };

    res.end(JSON.stringify(result));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});