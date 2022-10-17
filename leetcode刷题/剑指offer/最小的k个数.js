/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
  const res = [];
  for (let i = 0; i < k; i++) {
      res.push(arr[i])
  }
  for (let i = k; i < arr.length; i++) {
      if (arr[i] < Math.max(...res)) {
          res.splice(res.indexOf(Math.max(...res)), 1);
          res.push(arr[i])
      }
  }
  return res;
};