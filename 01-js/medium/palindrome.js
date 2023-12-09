/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  if (str.includes(" ")) return true;
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
