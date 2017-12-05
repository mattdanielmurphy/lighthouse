var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/')
	.on('error', function (err) { throw err })
	.on('response', function (response) {
		console.log('Response status code:', response.statusCode);
	})
	.pipe(fs.createWriteStream('./downloaded.html'));