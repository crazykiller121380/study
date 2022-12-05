/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var divide = function(a, b) {
  let n = 0;
  let MIN_INT = -Math.pow(2, 31);
  let MAX_INT = Math.pow(2, 31) - 1;
  if (a == MIN_INT && b == -1) return MAX_INT;
  if (a == MIN_INT && b == 1) return MIN_INT;
  let sign_bit = (a > 0) ^ (b > 0);
  a = Math.abs(a);
  b = Math.abs(b);
  // while (a >= b) {
  //     a = a - b;
  //     n ++;
  // }
  for (let i = 31; i >=0 ;i --) {
      if  (a >>> i >= b) {
          a = a - (b << i);
          n  = n + (1 << i);
      }
  }
  return sign_bit ? -n : n;
};
