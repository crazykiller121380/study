// js的除法不会像java一样自动向下取整
// 思路不考虑反转，直接对其进行相加，之后进位计算，一直计算到了l1或者l2没有了，再考虑l1和l2等长度的状态
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
  let head = null;
  let tail = null;
  let carry = 0;
  while(l1 || l2) {
    let n1 = l1 ? l1.val : 0;
    let n2 = l2 ? l2.val : 0;
    let sum = n1 + n2 + carry;
    if(!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if(l1) {
      l1 = l1.next;
    }
    if(l2) {
      l2 = l2.next;
    }
  }
  if(carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head;
};