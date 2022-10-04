/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) return [];
  const result = [];
  let tmp = [root];
  let num = 2;
  while(tmp.length) {
      const child = [];
      const level = [];
      for (let i = 0; i < tmp.length; i++) {
          level.push(tmp[i].val);
          if (tmp[i].right) {
              child.push(tmp[i].right);
          }
          if (tmp[i].left) {
              child.push(tmp[i].left);
          }
      }
      tmp = child;
      if (num % 2 == 1) {
          result.push(level);
      } else {
          result.push(level.reverse());
      }
      num ++;
  }
  return result;
};