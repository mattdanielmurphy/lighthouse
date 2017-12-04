var https = require('https');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
}

var callback = function(response) {
  console.log('In response handler callback!');
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH', chunk.length, '--]');
    console.log(chunk.toString());
  })
}

console.log('I am about to make the request!');

https.request(options, callback).end();

console.log('I have made the request!');