* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @return {number[]}
*/

var levelOrder = function(root) {
 let queue = [root];
 let result = [];
 while (queue.length) {
   let node = queue.shift();
   if (node) {
     result.push(node.val);
     queue.push(node.left);
     queue.push(node.right);
   }
 }
 return result;
};