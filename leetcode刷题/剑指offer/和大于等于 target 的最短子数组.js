/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let left = 0;
  let right = 1;
  let sum = nums[0];
  let res = 0;
  while(left < nums.length && right <= nums.length) {
      if (sum >= target) {
          if (res == 0) res = right - left;
          else res = (right - left) < res ? right - left : res;
          sum -= nums[left];
          left ++;
      } else if (sum < target) {
          sum += nums[right];
          right ++;
      }
  }
  return res;
};
