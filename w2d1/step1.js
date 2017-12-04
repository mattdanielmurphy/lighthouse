var https = require('https');

function getAndPrintHTMLChunks () {
	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step1.html'
	};

	// console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.

	https.get(requestOptions, function (response) {
		response.setEncoding('utf8');
		response.on('data', function (data) {
			var allData = [];
			allData.push(data);
		});

		response.on('end', function(data) {
			console.log('Response stream complete.');
			console.log(data.join('\n'));
		});
	});
}

getAndPrintHTMLChunks();