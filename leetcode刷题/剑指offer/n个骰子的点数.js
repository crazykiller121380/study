/**
 * @param {number} n
 * @return {number[]}
 */
 var dicesProbability = function(n) {
  // 二维数组，n 个骰子所以有 n 行，而每一行代表有 n 个骰子时，各值的出现次数，即如果2个骰子，各值的取值范围是 2 ~ 12(2 * 6)，出现次数取决于上一层的值(1 ~ 6)
  // n + 1 的原因是，第 0 行浪费啦，为了便于理解，第一个骰子对应第一行，而不是第 0 行
  // 每一行值范围是 n * 6 + 1 的原因跟上面一样，比如 2 个骰子，取值从 2 开始，到 12 结束，所以要多开一列，容纳 12 这个下标
  let dp = new Array(n + 1).fill().map(() => new Array(n * 6 + 1).fill(0)), result = [];

  // 初始化第一行，即一个骰子时，取值都为 1，因为出现次数只为 1 次，且各值取值只能为 1 ~ 6
  for(let i = 1; i <= 6; i++) {
      dp[1][i] = 1;
  }

  // 直接计算从第二个骰子开始，一直到第 n 个骰子的 dp
  for(let i = 2; i <= n; i++) {
      // 那一层骰子取值范围是 i 到 6 * i，例如第二个骰子，范围是 [2, 12]
      for(let j = i; j <= 6 * i; j++) {
          // 每个取值时，比如 4 这个取值，可能是上一次是 1 这次是 3，也可能上次 2 这次 2，也可能上次 3 这次 1，所以要 1-6 都遍历一次
          for(let cur = 1; cur <= 6; cur++) {
              // 出现 = 时只有一种情况，出现点数 0 ，不可能，所以也要排除，而对于 < ，如果此时要取 3 这个值的出现次数，前面的数如果是 4,5,6 这种大过它的也不可能
              if(j <= cur)
                  break;
              // 每个取值时，比如 4 这个取值，可能是上一次是 1 这次是 3，也可能上次 2 这次 2，也可能上次 3 这次 1，所以要累加
              dp[i][j] += dp[i - 1][j - cur];
          }
      }
  }
  
  let all = Math.pow(6, n);

  // 总数为 Math.pow(6, n)，比如 2个骰子，第一个取 1 时，第二个可能 [1, 6]，第一个取 2 时，第二个可能 [1, 6]，以此类推一直到第一个是 6 时
  // dp[n][i] 代表第 n 层的 i 取值出现次数，即 dp[2][12] 代表第二层时 12 的出现次数
  // 只取那一层对应索引范围内的出现次数即可，同时除以总数就是平均概率
  for(let i = n; i <= n * 6; i++) {
      result.push(dp[n][i] / all);
  }

  return result;
};


/**
 * @param {number} n
 * @return {number[]}
 */
 var dicesProbability = function(n) {
  let array = new Array(n + 1).fill().map(() => new Array(6 * n + 1).fill(0));
  let res = [];
  for (let i = 1; i <= 6; i++) {
      array[1][i] = 1;
  }
  for (let i = 2; i <= n; i++) {
      for (let j = i; j <= 6 * i; j++) {
          for (let cur = 1; cur <= 6; cur++) {
              if (j <= cur) 
                  break;
              array[i][j] += array[i - 1][j - cur];
          }
      }
  }
  let all = Math.pow(6, n);
  for (let i = n; i <= 6 * n; i ++) {
      res.push(array[n][i] / all);
  }
  return res;
};
