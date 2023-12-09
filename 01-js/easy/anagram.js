/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Handle Casing
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  // Count characters in the first string
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement counts for characters in the second string
  for (let char of str2) {
    if (!charCount[char]) {
      // If a character is not present in str1, it's not an anagram
      return false;
    }
    charCount[char] -= 1;
  }

  // Check if all character counts are zero
  return Object.values(charCount).every((count) => count === 0);
}

module.exports = isAnagram;
