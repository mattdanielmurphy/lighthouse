function isPalindrome(str) {
  var palindrome = str.split(" ").join("").toLowerCase();
  var mid = Math.floor(palindrome.length/2);
  var last = palindrome.length - 1;
  var isPal = true;
  for (var i = 0; i < mid; i++) {
  	if (palindrome[i] !== palindrome[last - i]) isPal = false;
  }
  return isPal;
}

// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);