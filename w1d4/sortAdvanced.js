var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

	// var older = duplicates.sort(function(a, b) {
	// 	return a.age - b.age;
	// });

function sortNames(array) {
	// sort all names
	var duplicates = [];

	for(n in array) {
		array.sort(function(a, b) {
			if(a.name < b.name) {
				return -1;
			};
			if(a.name > b.name) {
				return 1;
			};
			return 0;
		});
	}
	for(n in array) {
		var isOlder = array.sort(function(a, b) {
			return b.age - a.age;
		});
	};
	console.log('older:', isOlder);
	return array;
}

// sortNames(students);

console.log(sortNames(students));