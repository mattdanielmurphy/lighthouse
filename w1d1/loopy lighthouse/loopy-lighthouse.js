function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    var match = '';
    for (var n = 0; n < multiples.length; n++) {
      if (i % multiples[n] === 0) {
        match += words[n];
      }
    }

    if (match === '') {
      match = i;
    }

    console.log(match);
  }
}

loopyLighthouse([1, 12], [2, 3, 5], ['two', 'three', 'five']);
