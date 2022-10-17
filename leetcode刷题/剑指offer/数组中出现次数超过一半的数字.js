/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  const state = {};
  nums.forEach(item => {
      state[item] = state[item] ? state[item] + 1 : 1;
  })
  let topkey = nums[0];
  let toptimes = state[nums[0]];
  for (key in state) {
      if (state[key] > toptimes) {
          topkey = key;
          toptimes = state[key]
      }
  }
  return topkey;
};