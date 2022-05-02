/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  if (n == 1) return x;
  if (n == 0) return 1;
  if (n == -1) return 1/x;
  let res = myPow(x, n >> 1);
  res = res * res;
  if ((n & 1) != 0) {
    res = res * x;
  }
  return res;
};