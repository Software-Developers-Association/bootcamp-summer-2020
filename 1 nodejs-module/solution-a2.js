const http = require('http');
const url = require('url');
const port = process.env.PORT || 3000;

// create a FAUX database...
const students = [];

/**
 * This function finds a student and returns it. 
 * If it does not find a student, undefined is returned.
 * @param {String} studentId 
 */
function getStudentById(studentId) {
    let student = undefined;

    for(let i = 0; i < students.length; ++i) {
        if(students[i].id === studentId) {
            student = students[i];

            break;
        }
    }

    return student;
}

const server = http.createServer(
    (req, res) => {
        const parsedURL = url.parse(req.url, true);

        // We are a RESTful API so we will respond with JSON
        // objects.
        // This is RESTful API so ensure the client knows
        // we will be sending JSON data.
        res.setHeader('Content-Type', 'application/json');

        switch(req.method) {
            case 'GET': {
                if(parsedURL.pathname == '/students') {
                    // Check if they want ALL the students
                    // or a particular student...
                    if(Object.hasOwnProperty.bind(parsedURL.query)('id') == false) {
                        // The client wants ALL the students...
                        
                        // Set response status code to
                        // 200 - OK
                        res.statusCode = 200;
    
                        // Create a JSON object to respond
                        // with the requested resource
                        const result = {
                            message: `Success`,
                            code: res.statusCode,
                            students: students
                        };
    
                        // We convert the object to a string
                        // and write it to the response object
                        
                        res.write(JSON.stringify(result));
                    } else {
                        // The client wants a student with a particular
                        // ID
                        const studentId = parsedURL.query.id;

                        let student = getStudentById(studentId);

                        // Case 1 we did not find the student..
                        if(student === undefined) {
                            // We did not find the student
                            // so the ID is not in our FAUX database
                            // the client made a bad request.
                            // 400 - Bad Request
                            res.statusCode = 400;

                            const result =  {
                                message: `Invalid student ID ${studentId}`,
                                code: res.statusCode
                            };

                            res.write(JSON.stringify(result));
                        } else {
                            // Case 2 we DID find the student

                            // We found the student with the ID so
                            // the request is a valid one.
                            // 200 - OK
                            res.statusCode = 200;

                            const result = {
                                message: 'Success',
                                code: res.statusCode,
                                student: student
                            }

                            res.write(JSON.stringify(result));
                        }
                    }
                } else {
                    // We do not support other endpoints at this time...
                    // Set code to 400 - Bad Request
                    res.statusCode = 400;

                    const result =  {
                        message: `Invalid pathname ${parsedURL.pathname}`,
                        code: res.statusCode
                    };

                    res.write(JSON.stringify(result));
                }
            } break;
            case 'POST': {
                // Create a student...

                // Do data validation...
                if(Object.hasOwnProperty.bind(parsedURL.query)('name') == false) {
                    res.statusCode = 400;

                    const result = {
                        message: 'POST requires "name" parameter.',
                        code: res.statusCode
                    };

                    res.write(JSON.stringify(result));

                    // Break out of the switch statement...
                    break;
                } else {
                    if(parsedURL.query.name === '') {
                        res.statusCode = 400;

                        const result = {
                            message: '"name" parameter cannot be empty!',
                            code: res.statusCode
                        };

                        res.write(JSON.stringify(result));

                        break;
                    }
                }

                if(Object.hasOwnProperty.bind(parsedURL.query)('major') == false) {
                    res.statusCode = 400;

                    const result = {
                        message: 'POST requires "major" parameter.',
                        code: res.statusCode
                    };

                    res.write(JSON.stringify(result));

                    // Short circuit the switch statement...
                    break;
                } else {
                    if(parsedURL.query.major === '') {
                        res.statusCode = 400;

                        const result = {
                            message: '"major" cannot be empty!',
                            code: res.statusCode
                        };

                        res.write(JSON.stringify(result));

                        break;
                    }
                }

                res.statusCode = 200;

                // All parameters are valid at this point...
                // we can now start to take the data as serious data...

                let studentId = Math.floor(Math.random() * 999999);

                // Make sure we generate a valid unique student ID number...
                while(getStudentById(studentId) !== undefined) {
                    // Keep generating a new random ID until
                    // it becomes unique
                    studentId = Math.floor(Math.random() * 999999);
                }

                const student = {
                    id: studentId.toString().padStart(6, '0'),
                    name: parsedURL.query.name,
                    major: parsedURL.query.major
                };

                // update the FAUX database...
                students.push(student);

                const result = {
                    message: 'Created student successfully!',
                    code: res.statusCode,
                    student: student
                };

                res.write(JSON.stringify(result));
            } break;
            default: {
                // Set status code on the
                // response object to
                // 400 - Bad Request
                res.statusCode = 400;

                // Construct JSON result object
                // to send to the client.
                const result =  {
                    message: `Invalid HTTP method ${req.method}`,
                    code: res.statusCode
                };

                res.write(JSON.stringify(result));
            } break;
        }

        // MAKE SURE YOU HAVE THIS TO PREVENT THE CLIENT
        // FROM HANGING!
        res.end();
    }
);

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});