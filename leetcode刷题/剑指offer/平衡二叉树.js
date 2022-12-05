/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
  if (!root) return true;
  return (Math.abs(depth(root.left) - depth(root.right)) <= 1) && isBalanced(root.left) && isBalanced(root.right);
};

var depth = function(root) {
  if (!root) return 0;
  return Math.max(depth(root.left), depth(root.right)) + 1;
}