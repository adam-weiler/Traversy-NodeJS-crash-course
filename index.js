// const person = require('./person');  // Object
// console.log(person);


const Person = require('./person');  // Class
const person1 = new Person('John Doe', 30);

person1.greeting();


const Logger = require('./logger');

const newLogger = new Logger();

newLogger.on('message', data => console.log('Called Listener:', data));

newLogger.log('Hello World!');
newLogger.log('Hi!');
newLogger.log('Hello!');



// Using core modules here instead of express, so we don't need to rely on it.
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    if (req.url === '/api/users') {
        const users = [ 
            { name: 'Bob Smith', age: 40 },
            { name: 'Jane Doe', age: 30 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
