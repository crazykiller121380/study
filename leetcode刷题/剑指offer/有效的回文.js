var isPalindrome = function(s) {
  let i = 0, j = s.length - 1;
  while(i <= j) {
      const reg = /[^0-9a-zA-Z]/
      if(reg.test(s[i])) i++
      else if(reg.test(s[j])) j--
      else if(s[i++].toLowerCase() != s[j--].toLowerCase()) return false
  }
  return true
};
