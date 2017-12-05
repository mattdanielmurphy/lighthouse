const http = require('http');
const port = 8080;

function requestHandler(request, response) {
	response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`)
}

var server = http.createServer(requestHandler);

server.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
})