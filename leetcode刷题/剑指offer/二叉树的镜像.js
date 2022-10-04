/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
  if (!root) return root;
  let temp = root.right;
  root.right = root.left;
  root.left = temp;
  if (root.left) mirrorTree(root.left);
  if (root.right) mirrorTree(root.right);
  return root;
};