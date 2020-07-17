// 'import' the express.js module that we installed.
const express = require('express');
// 'import' the joi.js module that we installed.
const Joi = require('joi');
// 'import' the mysql.js module that we installed.
const mysql = require('mysql');
const fs = require('fs');

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
    multipleStatements: true
});

connection.connect((err) => {
    if(err) throw err;

    console.log('Connected to MySQL...');

    // Load up the setup.sql commands
    // Setup and run our Database Schema
    const buffer = fs.readFileSync('db/setup.sql');

    const contents = buffer.toString();

    connection.query(contents, (error, results, fields) => {
        if(error) throw error;

        console.log('Database configured and ready...');
    });
});