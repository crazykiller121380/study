
let nums = [2, 3, 1, 0, 2, 5, 3];

var findRepeatNumber = function(nums) {
  // step1 检测数组中是否有东西
  if (nums == null || nums.length <= 0) {
    return -1;
  }
  // step2 检测数组中数字的范围
  // 使用foreach不能用return结束
  // nums.forEach(item => {
  //   if (item < 0 || item > nums.length-1) {
  //     return -1;
  //   }
  // });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 || nums[i] > nums.length -1) {
      return -1;
    }
  }
  // step3 将数字从小到大排序
  nums.sort(function(a, b) {
    return a - b;
  });
  // nums.forEach((item, index) => {
  //   if(item == nums[index+1]) {
  //     return item;
  //   }
  // })
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1]) {
      return nums[i];
    }
  }

  return -1;
};

console.log(findRepeatNumber());

// 最终结果
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  // step1 检测数组中是否有东西
  if (nums == null || nums.length <= 0) {
    return -1;
  }
  // step2 检测数组中数字的范围
  // nums.forEach(item => {
  //   if (item < 0 || item > nums.length-1) {
  //     return -1;
  //   }
  // });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 || nums[i] > nums.length -1) {
      return -1;
    }
  }
  // step3 将数字从小到大排序
  nums.sort(function(a, b) {
    return a - b;
  });
  // nums.forEach((item, index) => {
  //   if(item == nums[index+1]) {
  //     return item;
  //   }
  // })
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1]) {
      return nums[i];
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  let obj = {};
  for(let i=0; i<nums.length; i++) {
    if(obj[nums[i]] == 1) {
      return nums[i];
    }else {
      obj[nums[i]] = 1;
    }
  }
};