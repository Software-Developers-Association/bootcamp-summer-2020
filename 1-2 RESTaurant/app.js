const mysql = require('mysql'); // Bring in the MySQL Node.js driver/module

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
        if(err) throw err;

        console.log('Database created (if not exist)...');

        loadDatabase();
    });
}

function loadDatabase() {
    const sql = 'USE restaurant;';

    connection.query(sql, (err, results, fields) => {
        if(err) throw err;

        console.log('Database restaurant loaded...');

        createTableUsers();
    });
}

function createTableUsers() {
    const sql =
    `CREATE TABLE IF NOT EXISTS users
    (
        user_id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
        fname VARCHAR(50) NOT NULL,
        lname VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        UNIQUE (email),
        UNIQUE (username),
        CHECK (fname <> ''),
        CHECK (lname <> ''),
        CHECK (email <> ''),
        CHECK (username <> ''),
        CHECK (password <> '')
    );`;

    connection.query(sql, (err, results, fields) => {
        if(err) throw err;

        console.log('USERS table created (if not exist)...');

        createTablePosts();
    });
}

function createTablePosts() {
    const sql =
    ` CREATE TABLE IF NOT EXISTS posts
    (
        post_id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
        user_id INT UNSIGNED,
        caption VARCHAR(255),
        image_url VARCHAR(255),
        likes INT UNSIGNED,
        dislikes INT UNSIGNED,
        location VARCHAR(50),
        FOREIGN KEY(user_id) REFERENCES users(user_id)
    )`;

    connection.query(sql, (err, results, fields) => {
        if(err) throw err;

        console.log('POSTS table created (if not exists)...');

        createTableBookmarks();
    });
}

function createTableBookmarks() {
    const sql =
    `CREATE TABLE IF NOT EXISTS bookmarks
    (
        user_id INT UNSIGNED,
        post_id INT UNSIGNED,
        FOREIGN KEY(user_id) REFERENCES users(user_id),
        FOREIGN KEY(post_id) REFERENCES posts(post_id)
    );`;

    connection.query(sql, (err, results, fields) => {
        if(err) throw err;

        console.log('BOOKMARKS table created (if not exists)...');

        createTableLikes();
    });
}

function createTableLikes() {
    const sql = 
    `CREATE TABLE IF NOT EXISTS likes
    (
        post_id INT UNSIGNED,
        user_id INT UNSIGNED,
        state TINYINT(1) UNSIGNED NOT NULL,
        FOREIGN KEY(post_id) REFERENCES posts(post_id),
        FOREIGN KEY(user_id) REFERENCES users(user_id)
    );`;

    connection.query(sql, (err, results, fields) => {
        if(err) throw err;

        console.log(`LIKES table created (if not exists)...`);
    });
}

/**
 * Write the express code required to
 * start building up our API.
 * 
 * Once you have the boilerplate code done,
 * create 1 express GET endpoint and have the
 * route be /users.
 */

 // Import the express module...
 const express = require('express');
 // Create our express application object
 // call it 'app' (not a required name...just what people name it...)
 const app = express();
 // Import Joi for JSON body validation.
 const Joi = require('joi');
 // Configure the port for the Node.js express server
 // to listen on...
 const port = process.env.PORT || 3000;

 // Ensure JSON will be parsed for the
 // req body. To do this, we will use some
 // middleware that is built into express
 app.use(express.json());

 // Register a GET request with the
 // /users route handler.
 app.get('/users', (req, res) => {
     res.json(
         {
             message: 'Hello, World!'
         }
     );
 });

 app.post('/users', (req, res) => {
     const schema = {
         fname: Joi.string().required(),
         lname: Joi.string().required(),
         email: Joi.string().required(),
         username: Joi.string().required(),
         password: Joi.string().required()
     };

     const validation = Joi.validate(req.body, schema);

     if(validation.error) {
         const result = {
             message: validation.error.message,
             code: res.statusCode = 400
         };
         
         return res.json(result);
     }

     const sql =
     `INSERT INTO users
     (
         fname,
         lname,
         email,
         username,
         password
     )
     VALUES
     (
         '${req.body.fname}',
         '${req.body.lname}',
         '${req.body.email}',
         '${req.body.username}',
         '${req.body.password}'
     )`;


     connection.query(sql, (err, results, fields) => {
         if(err) {
             return res.json(
                 {
                     message: err.message,
                     code: res.statusCode = 400
                 }
             );
         }

         const sql = `SELECT user_id, fname, lname, email, username FROM users WHERE username='${req.body.username}';`;

         connection.query(sql, (err, results, fields) => {
             if(err) {
                 return res.json(
                     {
                         message: err.message,
                         code: res.statusCode = 500
                     }
                 );
             }

             return res.json({
                 message: 'User added.',
                 code: res.statusCode = 200,
                 user: results[0]
             });
         });
     });
 });

 app.listen(port, () => {
     console.log(`Listening on port ${port}`);
 });