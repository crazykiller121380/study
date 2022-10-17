/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  let res = 0;
  const map = new Map();
  while (right < s.length) {
      let c1 = s[right];
      if (map.has(c1)) {
          map.set(c1, map.get(c1) + 1);
      } else {
          map.set(c1, 1);
      }
      right ++;
      while (map.get(c1) > 1) {
          let c2 = s[left];
          map.set(c2, map.get(c2) - 1);
          left ++;
      }
      res = Math.max(res, right - left);
  }
  return res;
};