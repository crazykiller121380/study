/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
  let array = []
  for (let i=0; i<nums.length; i++) {
    if (nums[i] % 2 == 1) {
      array.unshift(nums[i]);
    }else {
      array.push(nums[i]);
    }
  }
  return array;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
  return nums.sort((a, b) => b%2-a%2)
};