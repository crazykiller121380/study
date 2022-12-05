/**
 * @param {number} target
 * @return {number[][]}
 */
 var findContinuousSequence = function(target) {
  let left = 1;
  let right = 1;
  let temp = 0;
  let res = [];
  let array = new Array(target);
  for (let i = 0; i < array.length; i++) {
      array[i] = i + 1;
  }
  while (left < target / 2) {
      if (temp == target) {
          let one = [];
          for (let i = left; i < right; i++) {
              one.push(i);
          }
          res.push(one.slice(0));
          one.length = 0;
          temp = temp - left;
          left ++;
      } else if (temp < target) {
          temp = temp + right;
          right ++;
      } else {
          temp = temp - left;
          left ++;
      }
  }
  return res;
};