/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
  let a = 0, b = 0, c = 0;
  let dp = new Array(n);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
      let n1 = dp[a] * 2;
      let n2 = dp[b] * 3;
      let n3 = dp[c] * 5;
      dp[i] = Math.min(n1, n2, n3);
      if (dp[i] == n1) a++;
      if (dp[i] == n2) b++;
      if (dp[i] == n3) c++;
  }
  return dp[n - 1];
};
