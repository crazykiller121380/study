/**
 * @param {number} num
 * @return {number}
 */
 var translateNum = function(num) {
  let str = num + '';
  let dp = [1, 1];
  for (let i = 1; i < str.length; i++) {
      let tmp = parseInt(str.slice(i - 1, i + 1));
      if (tmp >= 10 && tmp <= 25) {
          dp[i + 1] = dp[i] + dp[i - 1];
      } else {
          dp[i + 1] = dp[i];
      }
  }
  return dp[dp.length - 1];
};