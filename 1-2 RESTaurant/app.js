const mysql = require('mysql'); // Bring in the MySQL Node.js driver/module
const { func } = require('joi');

// Create a connection to MySQL using a configuration
// object (JSON)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect(function(err) {
    // If there was an issue connecting to MySQL
    // Kill the entire server...
    if(err) throw err;

    console.log('Connected to MySQL...');

    createDatabase();
});

function createDatabase() {
    const sql = 'CREATE DATABASE IF NOT EXISTS restaurant;';

    connection.query(sql, function(err, results, fields) {
        if(err) return console.log(err.message);

        console.log('Database created (if not exist)...');

        loadDatabase();
    });
}

function loadDatabase() {
    const sql = 'USE restaurant;';

    connection.query(sql, (err, results, fields) => {
        if(err) return console.log(err.message);

        console.log('Database restaurant loaded...');

        createTableUsers();
    });
}

function createTableUsers() {
    const sql =
    `CREATE TABLE IF NOT EXISTS users
    (
        user_id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
        fname VARCHAR(50),
        lname VARCHAR(50),
        email VARCHAR(50),
        username VARCHAR(50),
        password VARCHAR(50)
    );`;

    connection.query(sql, (err, results, fields) => {
        if(err) return console.log(err.message);

        console.log('Table created (if not exist)...');
    });
}