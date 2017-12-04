var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
}

var callback = function() {
  console.log('In response handler callback!');
}

console.log('I am about to make the request!');

https.request(options, callback).end();

console.log('I have made the request!');