/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
  let count = 10;
  if (n < 10) return n;
  for (let i = 1; i <= 9; ++i) {
      if (i !== 1) count += i * 9 * 10 ** (i - 1);
      if (n >= count && n < count + (i + 1) * 9 * 10 ** i) {
          let rail = n - count;
          const base = String(10 ** i + Math.floor(rail / (i + 1)));
          const r = rail % (i + 1);
          return base[r];
      }
  }
};
