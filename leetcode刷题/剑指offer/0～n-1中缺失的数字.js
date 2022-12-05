/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  // let i = 0;
  // for (i = 0; i < nums.length; i++) {
  //   if (nums[i] != i) return i;
  // }
  // return i;

  if (nums.length - 1 == nums[nums.length - 1]) return nums.length;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid != nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};