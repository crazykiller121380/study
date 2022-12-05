var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
      // 如果当前元素大于 0，那说明从当前元素开始的后续元素不可能存在三个和为 0 的组合，直接返回答案
      if (nums[i] > 0) return res;
      // 如果当前元素和前边的那个元素相等，跳过，继续遍历。
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      // 设立双指针
      let l = i + 1, r = nums.length - 1;
      while (l < r) {
          // 定义三数之和，根据和与 0 的大小关系作处理，注意当和为 0 时要跳过重复的组合。
          const tempSum = nums[i] + nums[l] + nums[r];
          if (tempSum > 0) r--;
          if (tempSum < 0) l++;
          if (tempSum === 0) {
              res.push([nums[i], nums[l], nums[r]]);
              // 跳过重复组合
              while (l < r && nums[l] === nums[l + 1]) l++;
              while (r > l && nums[r] === nums[r - 1]) r--;
              l++;
              r--;
          }
      }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) return res;
      if (nums[i] == nums[i-1]) continue;
      let l = i + 1;
      let e = nums.length - 1;
      while (l < e) {
          let temp = nums[i] + nums[l] + nums[e];
          if (temp > 0) e --;
          if (temp < 0) l ++;
          if (temp == 0) {
              res.push([nums[i], nums[l], nums[e]]);
              while(l < e && nums[e] == nums[e-1]) e --;
              while(l < e && nums[l] == nums[l+1]) l ++;
              e --;
              l ++;
          }
      }
  }
  return res;
};
