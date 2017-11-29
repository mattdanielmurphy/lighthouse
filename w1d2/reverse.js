var input = process.argv[2];
input = 'test input';

if (input) {
  console.log(reverse(input));
}

function reverse(original) {
  return original.split('').reverse().join('');
}
