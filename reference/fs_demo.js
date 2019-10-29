const fs = require('fs');
const path = require('path');

// Create a new folder
// fs.mkdirSync(); // This is the synchronous version. It will pause the app until finished.
// fs.mkdir(); // This is the asynchronous version. It is called and won't pause the app.

// Create a new folder.
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created...');
});


// Write to file.
//fs.writeFile(); //Overwrites any existing file.
//fs.appendFile(); //Appends to any existing file.

// Create and write to file.
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if(err) throw err;
    console.log('File written to...');

    // File append.
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => {
        if(err) throw err;
        console.log('File appended to...');
    });
});


// Read file.
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});


// Rename file.
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'), 
    path.join(__dirname, '/test', 'hello2.txt'), 
    err => {
        if(err) throw err;
        console.log('File named...');
    }
);
