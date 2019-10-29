const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const newEmitterObject = new MyEmitter();

// Event listener
newEmitterObject.on('event', () => console.log('Event fired!'));

// Init event
newEmitterObject.emit('event');
newEmitterObject.emit('event');
newEmitterObject.emit('event');
newEmitterObject.emit('event');