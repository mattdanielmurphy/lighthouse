function countLetters(str) {
	// skip spaces
	str = str.split(' ').join('').toString();
	var uniqueChars = {};

	for (letter in str) {
		// if unique, add to the object
		var currentLetter = str[letter];
		if ( !Object.keys(uniqueChars).includes(str[letter])) {
			uniqueChars[currentLetter] = 1;
		} else {
			uniqueChars[currentLetter]++;
		}
	}
	console.log(uniqueChars)
}

countLetters('lighthouse in the house');