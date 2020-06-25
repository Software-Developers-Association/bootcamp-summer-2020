// import HTTP module
const http = require('http');

// Configure the port for the server to listen on.
const port = process.env.PORT || 3000;

// Configure the server, pass the function
// in which the server will call when
// a client connects to this server
const server = http.createServer((request, response) => {
    response.write("Hello, World!");
    response.end();
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});