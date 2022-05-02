/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
  let i, j, dp = new Array(n + 1).fill(0), nowBigger;
  dp[2] = 1;
  // 如果只剪掉长度为1，对最后的乘积无任何增益，所以从长度为2开始剪
  for(i = 2; i <= n; i++) {
      for(j = 1; j < i; j++) {
          // 剪了第一段后，剩下(i - j)长度可以剪也可以不剪。如果不剪的话长度乘积即为j * (i - j)；如果剪的话长度乘积即为j * dp[i - j]。取两者最大值
          nowBigger = Math.max(j * (i - j), j * dp[i - j]);
          // 对于同一个i，内层循环对不同的j都还会拿到一个max，所以每次内层循环都要更新max
          dp[i] = Math.max(dp[i], nowBigger);
      }
  }
  return dp[n];
};


/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    let array = Array(n+1).fill(0);
    array[2] = 1;
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j < i ; j++) {
        let bigger = Math.max((i - j) * j, array[i - j] * j);
        array[i] = Math.max(array[i], bigger);
      }
    }
    return array[n];
  };