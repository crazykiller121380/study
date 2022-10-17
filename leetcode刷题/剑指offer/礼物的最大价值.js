/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
  const dp = new Array(grid.length);
  for (let i = 0; i < dp.length; i ++) {
      dp[i] = new Array(grid[0].length);
  }
  dp[0][0] = grid[0][0];
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if(i == 0 && j == 0) continue;
          if (i == 0) dp[i][j] = dp[i][j - 1] + grid[i][j];
          if (j == 0) dp[i][j] = dp[i - 1][j] + grid[i][j];
          if (i != 0 && j != 0) dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
      }
  }
  return dp[grid.length - 1][grid[0].length -1];
};