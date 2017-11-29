var args = process.argv;

var sentence = '';

for (var i = 2; i < args.length; i++) {
  var firstLetter = '';
  var word = args[i];
  firstLetter = word.charAt(0);
  word = word.slice(1, word.length);
  sentence += word + firstLetter + 'ay ';
  word = '';
}

console.log(sentence);
