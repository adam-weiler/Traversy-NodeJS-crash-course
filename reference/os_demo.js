const os = require('os');

// Platform
console.log(os.platform());  // linux

// CPU Arch
console.log(os.arch());  // x64

// CPU Core Info
console.log(os.cpus());  // An object containing info about each CPU core.

// Free memory
console.log(os.freemem());  // 845783040

// Total memory
console.log(os.totalmem());  // 8226336768

// Home dir
console.log(os.homedir());  // /home/adam

// Uptime
console.log(os.uptime());  // 20548
