/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  let first = 0;
  let second = numbers.length - 1;
  let arr = []
  while (first < second) {
      if (numbers[first] + numbers[second] == target) {
          arr = [first, second];
          break;
      } else if (numbers[first] + numbers[second] < target) {
          first ++;
      } else {
          second --;
      }
  }
  return arr;
};
