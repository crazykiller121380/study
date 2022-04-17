// 二叉树节点定义
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // 前序第一个元素  将中序分成左树 与右树
  // 取出前序第一个元素做根节点
  if(preorder.length <= 0) return null
  let rootVal = preorder.shift()
  let node = new TreeNode(rootVal)
  let index = inorder.indexOf(rootVal)
  let leftInorder = inorder.slice(0, index)
  let rightInorder = inorder.slice(index + 1)
  // console.log('index',index);
  // console.log('中left',inorder.slice(0, index));
  // console.log('中left',inorder.slice(index + 1));
  // console.log('先left',preorder.slice(0, index));
  // console.log('先right',preorder.slice(index))
  node.left = buildTree(preorder.slice(0, index), leftInorder)
  node.right = buildTree(preorder.slice(index), rightInorder)
  return node
};

let preorder = [3,9,20,15,7];
let inorder = [9,3,15,20,7];
buildTree(preorder, inorder)
// console.log(buildTree(preorder, inorder));

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  if(preorder.length <= 0) return null
  let root = new TreeNode(preorder.shift());
  let index = inorder.indexOf(root.val);
  let leftInorder = inorder.slice(0,index);
  let rightInorder = inorder.slice(index+1);
  root.left = buildTree(preorder.slice(0,index),leftInorder);
  root.right = buildTree(preorder.slice(index),rightInorder);
  return root;
};