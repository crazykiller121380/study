var validPalindrome = function(s) {
  let slow = 0, fast = s.length - 1
  const isPalindrome = (slow, fast) => {
    for (let i = slow, j = fast;i < j;i++, j--) {
      if (s[i] != s[j]) return false
    }
    return true
  }
  while (slow < fast) {
    if (s[slow] == s[fast]) {
      slow++
      fast--
    } else {
      return isPalindrome(slow + 1, fast) || isPalindrome(slow, fast - 1)
    }
  }
  return true
};
