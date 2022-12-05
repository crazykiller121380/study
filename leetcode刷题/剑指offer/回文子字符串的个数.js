/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  // 判断空串情况
  if (s == null || !s.length) {
    return 0;
  }
  const countPalindrome = (s, start, end) => {
    let count = 0;
    // 从字符串的中心开始向两端延伸
    // 如果存在一个长度为m的回文子字符串，则分别再向该回文的两端延伸一个字符，并判断回文前后的字符是否相同
    while (start >= 0 && end < s.length && s.charAt(start) == s.charAt(end)) {
      count++;
      start--;
      end++;
    }
    return count;
  };

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // 回文的长度既可以是奇数，也可以是偶数
    // 长度为奇数的回文的对称中心只有一个字符
    // 第i个字符本身可以成为长度为奇数的回文子字符串的对称中心
    count += countPalindrome(s, i, i);
    // 长度为偶数的回文的对称中心只有两个字符
    // 第i个字符和第i+1个字符可以一起成为长度为偶数的回文子字符串的对称中心
    count += countPalindrome(s, i, i + 1);
  }
  return count;
};

/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  if (s == null || !s.length) {
    return 0;
  }
  const countPalindrome = (s, start, end) => {
    let count = 0;
    while (start >= 0 && end < s.length && s.charAt(start) == s.charAt(end)) {
      count ++;
      start --;
      end ++;
    }
    return count;
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += countPalindrome(s, i, i);
    count += countPalindrome(s, i, i+1);
  }
  return count;
};
