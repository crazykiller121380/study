/**
 * @param {string} s
 * @return {string[]}
 */
 var permutation = function(s) {
  const res = new Set();
  const visit = [];
  const traceback = function(path) {
      if (path.length == s.length) res.add(path);
      for (let i = 0; i < s.length; i++) {
          if (visit[i]) continue;
          visit[i] = true;
          traceback(path + s[i]);
          visit[i] = false;
      }
  }
  traceback('');
  return [...res];
};