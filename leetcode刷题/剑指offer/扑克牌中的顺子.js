/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
  let fir = -1;
  let zero = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
          zero ++;
      } else {
          if (fir == -1) {
              fir = nums[i];
          } else {
              if (nums[i] - fir != 1) {
                  if (zero == 0 || nums[i] - fir == 0) {
                      return false;
                  } else {
                      if (zero < nums[i] - fir - 1) return false;
                      else zero = zero - (nums[i] - fir - 1) 
                  }
              } 
              fir = nums[i];
          }
      }
  }
  return true;
};