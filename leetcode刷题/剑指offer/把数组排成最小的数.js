/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {
  return nums.sort((x, y) => `${x}${y}` - `${y}${x}`).join('');
};