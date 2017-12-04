module.exports = function getHTML (options, callback) {
	var https = require('https');
	var dataBuffer = '';
	https.get(options, function (response) {
		response.setEncoding('utf8');

		response.on('data', function(data) {
			dataBuffer += data;
		})

		response.on('end', function(data) {
			callback(dataBuffer);
		})
	})
}