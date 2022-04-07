// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 思路：使用哈希表存储 计算过的数值 对后续数值和前面存进去的相互比较

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    let left = target - nums[i];
    if (map.has(left) && i != map.get(left)) {
      return [map.get(left), i];
    } else {
      map.set(nums[i], i);
    }
  }
};