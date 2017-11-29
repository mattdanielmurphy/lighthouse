var args = process.argv;

function reverse(args) {
  var reversed = '';
  for (var i = 2; i < args.length; i++) {
    var word = args[i];
    for (var k = word.length; k >= 0; k--) {
      reversed += word.charAt(k);
    }

    console.log(reversed);
    reversed = '';
  }
}

reverse(args);
