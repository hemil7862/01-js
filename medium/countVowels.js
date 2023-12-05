/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let i = 0;
  str.split("").map((s) => {
    if (
      s.toLowerCase() === "a" ||
      s.toLowerCase() == "e" ||
      s.toLowerCase() === "i" ||
      s.toLowerCase() == "o" ||
      s.toLowerCase() === "u"
    )
      i = i + 1;
  });

  return i;
}

module.exports = countVowels;
