const http = require('http');
const http = require('http');
const net = require('net');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});

const socketServer = net.createServer((socket) => {
    // Handle socket connections here
});

socketServer.listen(8080, 'localhost', () => {
    console.log('Socket server running at http://localhost:8080/');
});