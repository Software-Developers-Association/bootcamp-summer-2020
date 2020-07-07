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
        fname VARCHAR(50),
        lname VARCHAR(50),
        email VARCHAR(50),
        username VARCHAR(50),
        password VARCHAR(50)
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