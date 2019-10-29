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
