/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function (s, p) {
  const s_length = s.length;
  const p_length = p.length;
  if (s_length < p_length) return [];
  const ans = [];
  let map = new Map();
  for (let i = 0; i < p_length; i++) {
    if (map.has(p[i])) {
      map.set(p[i], map.get(p[i]) + 1);
    } else {
      map.set(p[i], 1);
    }
  }
  let left = 0;
  let right = p_length;
  while (right <= s_length) {
    let temp = s.slice(left, right);
    let flag = true;
    let newMap = new Map([...map.entries()]);
    for (let i = 0; i < temp.length; i++) {
      if (newMap.has(temp[i])) {
        let num = newMap.get(temp[i]);
        if (num == 0) {
          flag = false;
          break;
        } else {
          newMap.set(temp[i], num - 1);
        }
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      ans.push(left);
    }
    left ++;
    right ++;
  }
  return ans;
};