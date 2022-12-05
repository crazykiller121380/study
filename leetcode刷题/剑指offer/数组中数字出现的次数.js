// 异或的性质
// 两个数字异或的结果a^b是将 a 和 b 的二进制每一位进行运算，得出的数字。 运算的逻辑是
// 如果同一位的数字相同则为 0，不同则为 1

// 异或的规律
// 任何数和本身异或则为 0
// 任何数和 0 异或是 本身
// 异或满足交换律。 即 a ^ b ^ c ，等价于 a ^ c ^ b


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function(nums) {
  let res = [];
  for(let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) res.push(nums[i]);
  }
  return res;
};

var singleNumbers = function(nums) {
  let res = 0;
  for (let n of nums) {
    res ^= n;
  }
  let mask = 1;
  while((res & mask) == 0) {
    mask << 1;
  }
  let a = 0;
  let b = 0;
  for (let n of nums) {
    if ((n & mask) == 0) {
      a ^= n;
    } else {
      b ^= n;
    }
  }
  return [a, b];
};