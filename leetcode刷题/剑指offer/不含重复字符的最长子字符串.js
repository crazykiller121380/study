/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) return 0;
  let left = 0;
  let right = 1;
  let ans = 1;
  let arr = [s[0]];
  while (right < s.length && left <= right) {
    let index = arr.indexOf(s[right]);
    if (index == -1) {
      arr.push(s[right]);
    } else {
      ans = Math.max(ans, arr.length);
      arr = arr.slice(index + 1, arr.length);
      arr.push(s[right]);
      left = index + 1;
    }
    right ++;
  }
  return Math.max(ans, arr.length);
};