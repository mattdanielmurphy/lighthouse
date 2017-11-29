// Take single input from command line
var input = process.argv[2];

function genRandomNumber(num) {
	var rolledDiceNumber = '';
	for (var i = 0; i <= input; i++) {
	 		rolledDiceNumber += Math.floor( Math.random() * 6 + 1);
	 	if (i < input) {
		 	rolledDiceNumber += ', ';
	 	}
	}
	console.log(rolledDiceNumber)
}

genRandomNumber()

// # Chun's while and join solution:
// var times = process.argv.splice(2);
// var rolledTimes = 'Rolled ' + times + ' dice: '
// var rolledDiceNumber = [];
// while (times > 0){
//     rolledDiceNumber.push(Math.floor((Math.random() * 6) + 1));
//     times--;
//   }
// rolledDiceNumber.join(', ')
// console.log(rolledTimes + rolledDiceNumber);
