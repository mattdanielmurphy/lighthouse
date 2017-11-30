var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(pair) {
	var x = pair.x;
	var y = pair.y;
	var addSquares = Math.pow(x, 2) + Math.pow(y, 2);
	return Math.sqrt(addSquares);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);