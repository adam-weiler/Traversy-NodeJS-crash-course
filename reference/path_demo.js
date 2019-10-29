const path = require('path');

// Gets the base file name. ie: path_demo.js
console.log(path.basename(__filename));


// Directory name. ie: Desktop/NODE_CRASH_COURSE/reference
console.log(path.dirname(__filename));

// File extension. ie: .js
console.log(path.extname(__filename));

// Create path object. ie: object with root, dir, base, ext, name.
console.log(path.parse(__filename));

// Concatenate paths. ie: Desktop/NODE_CRASH_COURSE/reference/test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));

