/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let max = 0;
//     for (let i = prices.length - 1; i > 0; i--) {
//         for (let j = i - 1; j >= 0; j--) {
//             if (prices[i] - prices[j] > 0 && prices[i] - prices[j] > max) {
//                 max = prices[i] - prices[j];
//             }
//         }
//     }
//     return max;
// };

var maxProfit = function(prices) {
  let min = prices[0];
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
      res = Math.max(res, prices[i] - min);
      min = Math.min(min, prices[i]);
  }
  return res;
};