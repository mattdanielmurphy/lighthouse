var getHTML = require('../step5-module');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse(html) {
	console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, reverse);