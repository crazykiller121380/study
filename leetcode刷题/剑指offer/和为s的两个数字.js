/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let res = [];
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
      let temp = nums[left] + nums[right]
      if (target == temp) {
          res.push(nums[left]);
          res.push(nums[right]);
          break;
      } else if (target > temp) {
          left ++;
      } else {
          right --;
      }
  }
  return res;
};
