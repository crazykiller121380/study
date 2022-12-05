/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// BFS
 var maxDepth = function(root) {
  if(!root) return 0;
  let res = 0;
  let temp = [root];
  while(temp.length != 0) {
      res ++;
      let ttt = [];
      for (let i = 0; i < temp.length; i++) {
          if (temp[i].left) ttt.push(temp[i].left);
          if (temp[i].right) ttt.push(temp[i].right);
      }
      temp = ttt.slice(0);
  }
  return res;
};

// DFS
var maxDepth = function(root) {
  if(!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};