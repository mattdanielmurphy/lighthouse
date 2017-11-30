function makeNumberArray (length) {
	var arr = [];
	var max = 1e5;
	var min = 1;
	while(arr.length < length) {
		var randomNumber = Math.random() * (max - min) + min;
		arr.push( Math.floor(randomNumber) );
	};
	return arr;
};

var array = makeNumberArray(10);

function sortArray (array) {
	array.forEach( function (e, i) {
		array.sort( function (a, b) {
			return a - b;
		})
	})
	return array;
}

console.log(sortArray(array));
