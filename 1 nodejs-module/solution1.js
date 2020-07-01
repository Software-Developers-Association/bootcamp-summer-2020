// const http = require('http');
// const url = require('url');

// const server = http.createServer(
//     (req, res) => {
//         // Tell the client, the payload should be treated
//         // as JSON
//         res.setHeader("Content-Type", "applicaton/json");

//         if(req.method == 'POST') {
//             res.statusCode = 200; // valid!

//             const result = {
//                 message: "Valid HTTP method!",
//                 code: res.statusCode
//             };

//             res.write(JSON.stringify(result));
//         } else {
//             res.statusCode = 400;

//             const result = {
//                 message: `Invalid HTTP method ${req.method}`,
//                 code: res.statusCode
//             };

//             res.write(JSON.stringify(result));
//         }

//         // REMEMBER TO CLOSE
//         res.end();
//     });

// const port = process.env.PORT || 3000;

// server.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });

const http = require('http');
const url = require('url');
const port = process.env.PORT || 3000;

const server = http.createServer(
    (req, res) => {
        // MAKE SURE YOU SET THE CORRECT CONTENT-TYPE!
        res.setHeader('Content-Type', 'application/json');

        if(req.method == 'POST') {
            const parsedURL = url.parse(req.url, true);
            
            // Ensure the path is for /student
            if(parsedURL.pathname == '/student') {
                res.statusCode = 200;
            
                const result = {
                    message: "Valid post!",
                    code: res.statusCode,
                    name: parsedURL.query.name,
                    id: parsedURL.query.id,
                    major: parsedURL.query.major
                };
    
                res.write(JSON.stringify(result));
            } else {
                // we do not support any other pathname

                res.statusCode = 400;

                const result = {
                    message: `Invalid pathname ${parsedURL.pathname}`,
                    code: res.statusCode
                };

                res.write(JSON.stringify(result));
            }

        } else {
            res.statusCode = 400;

            const result = {
                message: `Invalid HTTP method ${req.method}`,
                code: res.statusCode
            };

            res.write(JSON.stringify(result));
        }

        // WE MUST CLOSE THE CONNECTION!!!!!!!!!!!!!
        res.end();
    });

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});