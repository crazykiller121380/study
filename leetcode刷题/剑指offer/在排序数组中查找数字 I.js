/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  if (nums.indexOf(target) == -1) return 0;
  return nums.lastIndexOf(target) - nums.indexOf(target) + 1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let start = -1;
  let end = -1;
  let min = 0;
  let max = nums.length - 1;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2)
    if (nums[mid] == target) {
      start = mid;
      max = mid - 1;
    } else if (nums[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    } 
  }
  min = 0;
  max = nums.length - 1;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2)
    if (nums[mid] == target) {
      end = mid;
      min = mid + 1;
    } else if (nums[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return start != -1 && start <= end ? end - start + 1 : 0;
};