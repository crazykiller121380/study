var countBits = function(n) {
  let res = [];
  res[0] = 0
  for(let i = 1;i <=n;i++) {
      res[i] = res[i & (i - 1)] + 1; //整数 i 的二进制形式中1的个数比 i &(i - 1)的二进制形式中1的个数多1
  }
  return res
};

// 方法一：Brian Kernighan\text{Brian Kernighan}Brian Kernighan 算法
// 最直观的做法是对从 000 到 nnn 的每个整数直接计算「一比特数」。每个 int\texttt{int}int 型的数都可以用 323232 位二进制数表示，只要遍历其二进制表示的每一位即可得到 111 的数目。
// 利用 Brian Kernighan\text{Brian Kernighan}Brian Kernighan 算法，可以在一定程度上进一步提升计算速度。Brian Kernighan\text{Brian Kernighan}Brian Kernighan 算法的原理是：对于任意整数 xxx，令 x=x & (x−1)x=x~\&~(x-1)x=x & (x−1)，该运算将 xxx 的二进制表示的最后一个 111 变成 000。因此，对 xxx 重复该操作，直到 xxx 变成 000，则操作次数即为 xxx 的「一比特数」。
// 对于给定的 nnn，计算从 000 到 nnn 的每个整数的「一比特数」的时间都不会超过 O(log⁡n)O(\log n)O(logn)，因此总时间复杂度为 O(nlog⁡n)O(n \log n)O(nlogn)。

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  let res = [];
  res[0] = 0;
  for (let i = 1; i <=n ;i ++) {
      res[i] = res[i & (i - 1)] + 1;
  }
  return res;
};
