/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  while(root) {
      if (root.val == p.val || root.val == q.val || root.val < p.val && root.val > q.val || root.val > p.val && root.val < q.val) return root;
      if (root.val < p.val && root.val < q.val) root = root.right;
      if (root.val > p.val && root.val > q.val) root = root.left;
  }
};