const nums = [1,6,2,3,1,5];
// 查看数组中那个数字重复出现了
function repeatShow(nums) {
  console.log(nums);
  // 先排序
  nums.sort();
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1]) {
      return nums[i];
    }
  }
}
console.log(repeatShow(nums));