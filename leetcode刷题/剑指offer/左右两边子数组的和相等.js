/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
      const leftArr = nums.slice(0, i);
      const rightArr = nums.slice(i + 1, nums.length)
      if (leftArr.length) {
          left = leftArr.reduce((a, b) => a + b);
      } else {
          left = 0;
      }
      if (rightArr.length) {
          right = rightArr.reduce((a, b) => a + b);
      } else {
          right = 0;
      }
      if (left == right) return i;
  }
  return -1;
};

var pivotIndex = function(nums) {
  const sum = nums.reduce((a, b) => a + b);
  let current = 0;
  let left, right = 0;
  for (let i = 0; i < nums.length; i++) {
      if (i == 0) {
          left = 0;
          right = sum - nums[0];
      } else if (i == nums.length - 1) {
          right = 0;
          left = sum - nums[nums.length - 1];
      } else {
          current += nums[i-1];
          left = current;
          right = sum - left - nums[i];
      }
      if (left == right) return i;        
  }
  return -1;
};
