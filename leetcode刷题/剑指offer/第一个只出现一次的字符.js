/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
  for (let char of s) {
      if (s.indexOf(char) == s.lastIndexOf(char)) return char;
  }
  return " ";
};