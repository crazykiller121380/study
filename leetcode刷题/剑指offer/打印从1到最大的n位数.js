/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
  let array = [];
  for (let i=1; i<=parseInt("9".repeat(n)); i++) {
    array.push(i);
  }
  return array;
};

/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
  return Array(Math.pow(10,n)-1).fill(null).map((_,index) => index + 1);
};