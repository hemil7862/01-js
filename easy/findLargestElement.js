/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

//const num = [3, 27, 2, 9, 11];
function findLargestElement(numbers) {
  let maxValue = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
      //console.log(maxValue);
    }
  }

  return maxValue;
}

//console.log(findLargestElement(num));

module.exports = findLargestElement;
