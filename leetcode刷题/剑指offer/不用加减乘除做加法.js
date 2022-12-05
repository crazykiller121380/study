/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {
  while (b) {
      let jinwei = a & b;
      a = a ^ b;
      b = jinwei << 1;
  }
  return a;
};

