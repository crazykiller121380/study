/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
  if(!A || !B)
      return false;
  
  return isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function isSame(A, B) {
  // B空了，说明B树遍历完了，是子树
  if(!B)
      return true;
  // 不符合上面情况的前提下A空了，说明B树还没遍历完，不是子树
  if(!A)
      return false;
  // 值不同，不是子树
  if(A.val !== B.val)
      return false;
  return isSame(A.left, B.left) && isSame(A.right, B.right);
}
