var pathSum = function (root, sum) {
  if (!root) return []
  let curSum = 0
  let res = []
  let path = []
  findPath(root, sum, curSum, res, path)
  return res
};
var findPath = function (root, sum, curSum, res, path) {
  path.push(root.val)
  curSum += root.val
  if (curSum === sum && !root.left && !root.right) {
      res.push(path.slice(0))
  }
  if (root.left) {
      findPath(root.left, sum, curSum, res, path)
  }
  if (root.right) {
      findPath(root.right, sum, curSum, res, path)
  }
  path.pop()
}