// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var singleNumber = function(nums) {
//   let array = new Array(32);
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < 32; i++) {
//           if (((nums[i] >> j) & 1) == 1) {
//               array[i] ++;
//           }
//       }
//   }
//   let res = 0;
//   for (let i = 0; i < 32; i++) {
//       if ((array[i] % 3) & 1 == 1) {
//           res += 1 << i;
//       }
//   }
//   return res;
// };

var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let length = nums.length;
  let [m, n] = [0, 2];
  while(m < length) {
      console.log('nums[m]:' + nums[m]);
      console.log('nums[n]:' + nums[n]);
      if (nums[m] != nums[n]) {
          return nums[m];
      } else {
          m += 3;
          n += 3;
      }
  }
};

singleNumber([2,2,3,2]);