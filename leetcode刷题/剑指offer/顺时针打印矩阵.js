var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
      return [];
  }

  const rows = matrix.length, columns = matrix[0].length;
  const order = [];
  let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
  while (left <= right && top <= bottom) {
      for (let column = left; column <= right; column++) {
          order.push(matrix[top][column]);
      }
      for (let row = top + 1; row <= bottom; row++) {
          order.push(matrix[row][right]);
      }
      if (left < right && top < bottom) {
          for (let column = right - 1; column > left; column--) {
              order.push(matrix[bottom][column]);
          }
          for (let row = bottom; row > top; row--) {
              order.push(matrix[row][left]);
          }
      }
      [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return order;
};


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    if(matrix.length==0 || matrix[0].length==0) return [];
    // 行列长度
    const rows = matrix.length;
    const columns = matrix[0].length;
    // 设定四角
    let top = 0;
    let bottom = rows-1;
    let left = 0;
    let right = columns-1;
    // 返回的输出数组
    const order = []
    // 进行循环
    while (left<=right && top<=bottom) {
      // 最上面一行
      for (let i=left; i<=right; i++) order.push(matrix[top][i]);
      // 最右侧一列
      for (let j=top+1; j<=bottom; j++) order.push(matrix[j][right]);
      if (left<right && top<bottom) {
        for (let k=right-1; k>left; k--) order.push(matrix[bottom][k]);
        for (let t=bottom; t>top; t--) order.push(matrix[t][left]);
      }
      [left, right, top, bottom] = [left+1, right-1, top+1, bottom-1];
    }
    return order;
  };