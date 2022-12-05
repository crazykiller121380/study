/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

 var kthLargest = function(root, k) {
  // if (!root) return null;
  // let res = [];
  // let queue = [root];
  // while(queue.length != 0) {
  //   let item = queue.shift()
  //   res.push(item.val);
  //   if (item.left) queue.push(item.left);
  //   if (item.right) queue.push(ivar.right);
  // }
  // res.sort((a, b) => b - a);
  // return res[k - 1];
  let res = [];
  orderTree(root);
  return res[k - 1];
  function orderTree(root) {
    if (!root) return ;
    orderTree(root.right);
    res.push(root.val);
    orderTree(root.left);
  }
};