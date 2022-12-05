/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  // 先将所有node都存在栈里面
  let stack1 = [], stack2 = [];
  while(l1){
      stack1.push(l1);
      l1 = l1.next;
  }
  while(l2){
      stack2.push(l2);
      l2 = l2.next;
  }
  // 从后往前遍历，每个栈中对应数字相加
  const len = Math.max(stack1.length, stack2.length);
  let one = 0;
  let result = null;
  for (let i = 0; i < len; i++){
      // 如果其中一个栈空了（较短的链表），就用0补齐
      let x1 = stack1.length ? stack1.pop().val : 0;
      let x2 = stack2.length ? stack2.pop().val : 0;
      let sum = x1 + x2 + one;
      // 计算当前数字就是取余，计算进位就是整除
      result = new ListNode(sum % 10, result);
      one = Math.floor(sum / 10);
  }
  // 最后可能还多个1要进位，单独加个1在最前面
  if (one) result = new ListNode(1, result);
  return result;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let stack1 = [], stack2 = [];
  while (l1) {
    stack1.push(l1);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2);
    l2 = l2.next;
  }
  const len = Math.max(stack1.length, stack2.length);
  let one = 0;
  let result = null;
  for (let i = 0; i < len; i++) {
    let x1 = stack1.length ? stack1.pop().val : 0;
    let x2 = stack2.length ? stack2.pop().val : 0;
    let sum = x1 + x2 + one;
    one = Math.floor(sum / 10);
    result = new ListNode(sum % 10, result);
  }
  if (one) result = new ListNode(1, result);
  return result;
};