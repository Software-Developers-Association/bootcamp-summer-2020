// Run the db/setup.sql to ensure
// all the tables and triggers exists...
const child_process = require('child_process');
const exec = child_process.exec;

exec('mysql -u root < db/setup.sql', (error, stdout, stderr) => {
    if(error) throw error;

    if(stderr) throw new Error(stderr);

    console.log('MySQL database validation complete....');
});

// 'import' the express.js module that we installed.
const express = require('express');
// 'import' the joi.js module that we installed.
const Joi = require('joi');
// 'import' the mysql.js module that we installed.
const mysql = require('mysql');

// This is express configuration.
const app = express();
const port = process.env.PORT || 3000;
// Configure the middleware on every route
// to parse the req.body as a JSON object.
app.use(express.json());

// This is configuration for MySQL
const connection = mysql.createConnection({
    host: 'localhost', // OR host: domain.com
    port: 3306, // DEFAULTS to 3306
    user: 'root', // DEFAULT user (you can configure one in PHPMyAdmin or via CLI)
    password: '', // DEFAULT password is empty... (in production do not allow this........!!!!!!!!!!!!)
    database: 'review',
    multipleStatements: true
});

connection.connect((err) => {
    if(err) throw err;

    console.log('Connected to MySQL...');

    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
});

/**
 * This route /users, returns all the users
 * that are registered in the database.
 */
app.get('/users', (req, res) => {
    // Construct our SQL query statement.
    const sql = 'SELECT fname, lname, email, username FROM users;';

    // Execute the query on our DB connection...
    connection.query(sql, (err, results, fields) => {
        // If there was an error reading from the database...
        if(err) {
            // Return a JSON response to the client
            // that an error has occured...
            return res.json({
                message: err.message,
                code: res.statusCode = 500 // Throw a status-code 500 - Internal Server Error
            });
        }

        // Return a JSON response to the client...
        // populate the users property with the results
        // from the database.
        return res.json({
            message: 'OK',
            code: res.statusCode = 200,
            users: results
        });
    });
});

app.get('/user', (req, res) => {
    const sql = `SELECT * FROM users WHERE username='${req.body.username}'`;

    connection.query(sql, (error, results, fields) => {
        if(error) return res.json({
            message: error.message,
            code : res.statusCode = 400
        });

        return res.json({
            message: 'OK',
            code : res.statusCode = 200,
            user: results
        });
    });
});

app.post('/users', (req, res) => {
    const apple = {
        fname: Joi.string().required(),
        lname: Joi.string().required(),
        email: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    const { error } = Joi.validate(req.body, apple);

    if(error) {
        return res.json({
            message: error.message,
            code: res.statusCode = 400
        });
    }

    const sql = `INSERT INTO users (fname, lname, email, username, password) VALUES ('${req.body.fname}', '${req.body.lname}', '${req.body.email}', '${req.body.username}', '${req.body.password}');`;

    connection.query(sql, (err, results, fields) => {
        if(err) {
            return res.json({
                message: err.message,
                code: res.statusCode = 400
            });
        }

        return res.json({
            message: 'OK',
            code: res.statusCode = 200
        });
    });
});