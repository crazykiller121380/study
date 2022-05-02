/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
  let num = numbers[0];
  for (let i=0; i<numbers.length;i++) {
    if (num>numbers[i]) {
      return numbers[i];
    }
  }
  return num;
};