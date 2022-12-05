/**
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs = function(nums) {
  function mergesort(arr) {
    if (arr.length < 2) return arr;
    let len = arr.length;
    let mid = Math.floor(len / 2);
    return merge(mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid))); 
  }
  function merge(left, right) {
    let res = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        res.push(left.shift());
      } else {
        result += left.length;
        res.push(right.shift());
      }
    }
    return res.concat(left, right);
  }
  let result = 0;
  mergesort(nums);
  return result;
};