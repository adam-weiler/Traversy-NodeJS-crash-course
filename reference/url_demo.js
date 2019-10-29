const url = require('url');

const myUrl = new URL('http://somewebsite.com:8000/test.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);  // http://somewebsite.com:8000/test.html?id=100&status=active
console.log(myUrl.toString());  // http://somewebsite.com:8000/test.html?id=100&status=active

// Host (root domain)
console.log(myUrl.host);  // somewebsite.com:8000

// Hostname (does not get port)
console.log(myUrl.hostname);  // somewebsite.com

// Pathname
console.log(myUrl.pathname);  // test.html

// Serialized query
console.log(myUrl.search);  // ?id=100&status=active

// Params object
console.log(myUrl.searchParams);  // { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append('abc', 123);
console.log(myUrl.searchParams);  // { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));  // Loops through each value in params.

