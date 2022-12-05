/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  let res = 0, total = 1, left = 0, right = 0
  while(right < nums.length) {
      total *= nums[right]
      while(left <= right && total >= k)  {
          total /= nums[left++]
      }
      if (left <= right) {
          res += right - left + 1
      }
      right++
  }
  return res
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  let left = 0;
  let right = 0;
  let res = 0;
  let ji = 1;
  while (right < nums.length) {
      ji *= nums[right];
      while (left <= right && ji >= k) {
          ji /= nums[left++];
      }
      if (left <= right) {
          res += right - left + 1;
      }
      right ++;
  }
  return res;
};
