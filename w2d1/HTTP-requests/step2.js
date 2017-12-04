var https = require('https');

function getAndPrintHTML() {
	var requestOptions = {
			host: 'sytantris.github.io',
			path: '/http-examples/step2.html'
	};

	var dataBuffer = '';
	https.get(requestOptions, function (response) {
		response.setEncoding('utf8');

		response.on('data', function(data) {
			dataBuffer += data;
		})

		response.on('end', function(data) {
			console.log(dataBuffer);
		})
	})
}

getAndPrintHTML();