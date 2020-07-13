const express = require('express');
const app = express();
const Joi = require('joi');

// Enable JSON body parsing middleware.
app.use(express.json());

/**
 * For Windows, you can setup the Environment variables in
 * 'Edit System Environment Variables' and create a variable labeled PORT
 * 
 * For UNIX machines, you have to setup a _profile or *rc file. To check what type of
 * shell you are using, run
 * > echo $SHELL
 * Once you know the shell, Google how to set/export an environment variable.
 * 
 * Example (using /bin/bash)
 * vim ~/.bash_profile
 * ^ This creates the file if it does not exists already...
 * Insert
 * export PORT=SOME_PORT_NUMBER
 * Example:
 * export PORT=54321
 * 
 * Google which ports are reserved for your machine.
 */
const port = process.env.PORT || 3000;

// Step 1 Create a HOME Route...
/**
 * This route, is a special route. the / route indicates HOME.
 * HOME is a relative location. In this example HOME is
 * http://localhost:PORT/
 * 
 */
app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!',
        code: res.statusCode = 200
    });
});

// Step 2 Create an other route...
app.get('/students', (req, res) => {
    // res.json({
    //     message: 'This is the /students route.',
    //     code: res.statusCode = 200
    // });

    const result = {
        message: 'This is the /students route.',
        code: res.statusCode = 200
    };

    const json = JSON.stringify(result);
    res.setHeader('Content-Type', 'application/json');
    res.send(json);
    res.end();
});

// Step 3 Create a POST route...
app.post('/students', (req, res) => {
    const schema = {
        fname: Joi.string().required(),
        favNumber: Joi.number().required(),
        favColor: Joi.string().optional()
    };

    // const validation = Joi.validate(req.body, schema);

    // if(validation.error) {
    //     // Short circuit the IF statement
    //     return res.json({
    //         message: validation.error.message,
    //         code: res.statusCode = 400 // BAD Request
    //     });
    // }

    const { body } = req;

    console.log(body);

    const { error } = Joi.validate(body, schema);

    if(error) {
        return res.json({
            message: error.message,
            code: res.statusCode = 400
        });
    }

    // Kill the connection.
    res.end();
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});