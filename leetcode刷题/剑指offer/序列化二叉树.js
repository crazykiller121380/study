/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while(queue.length != 0) {
      const cur = queue.shift();
      if (!cur) {
          res.push(cur);
          continue;
      }
      res.push(cur.val);
      queue.push(cur.left);
      queue.push(cur.right);
  }
  return res;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if (!data || data.length == 0) return null;
  let root = new TreeNode(data[0]);
  const queue = [root];
  let i = 1;
  while (i < data.length) {
      const cur = queue.shift();
      if (i < data.length) {
          if (data[i] != null) {
              cur.left = new TreeNode(data[i]);
              queue.push(cur.left);
          }
          i ++;
      }
      if (i < data.length) {
          if (data[i] !=null) {
              cur.right = new TreeNode(data[i]);
              queue.push(cur.right);
          }
          i ++;
      }
  }
  return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/