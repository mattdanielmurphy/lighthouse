var words = ["ground", "control", "to", "major", "tom"];

function map(list, callback) {
	var newArray = [];
	// 1) iterate through the array passed in (list)
	list.forEach(function(elem, ind) {
		// 2) insert the items from the list
		newArray.push(callback(list[ind]));
	})
	// 3) return our newly built array of modified items
  return newArray;
}

console.log(
	map(words, function(word) {
	  return word.length;
	})
);

console.log(
	map(words, function(word) {
	  return word.toUpperCase();
	})
);

console.log(
	map(words, function(word) {
	  return word.split('').reverse().join('');
	})
);