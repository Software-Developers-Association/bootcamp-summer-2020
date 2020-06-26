const http = require('http');
const url = require('url');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);

    // Prepare the response object with the correct headers.
    res.setHeader('content-type', 'application/json');

    const jsonString = JSON.stringify(parsedURL.query);

    res.write(jsonString);

    res.end(); // THIS IS IMPORTANT SO THE CLIENT DOES NOT HANG!!!!!!!!!!!
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});