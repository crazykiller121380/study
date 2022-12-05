/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
  let sx = s.slice(0, n);
  s = s.slice(n);
  return s + sx;
};