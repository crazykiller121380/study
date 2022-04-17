// 平铺数组之后直接找
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//  var findNumberIn2DArray = function(matrix, target) {
//   let arr = matrix.flat();
//   if(arr.indexOf(target) != -1) {
//     return true;
//   }
//   return false;
// };

var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length == 0) {
    return false;
  }
  let i = matrix[0].length-1;
  let j = 0;
  console.log(i,j);
  console.log(matrix[i][j]);
  while(i>=0 && j<=matrix.length-1) {
    // console.log("111");
    if(target>matrix[i][j]) {
      j = j+1;
    }else if(target<matrix[i][j]) {
      i = i-1;
    }else {
      console.log(i, j, matrix[i][j]);
      return true;
    }
  }
  return false;
};

let matrix = [[1,1]];
target = 20;

console.log(findNumberIn2DArray(matrix, target));

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length == 0) {
    return false;
  }
  let i = matrix[0].length-1;
  let j = 0;
  while(i>=0 && j<=matrix.length-1) {
    if(target>matrix[j][i]) {
      j = j+1;
    }else if(target<matrix[j][i]) {
      i = i-1;
    }else {
      return true;
    }
  }
  return false;
};
