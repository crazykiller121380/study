/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var reverseList = function(head) {
  let pre = null;
  let cur = head;
  let temp;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur
    cur = temp;
  }
  return pre;
}

var isPalindrome = function(head) {
  if (!head || !head.next) return true; 
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast != null) slow = slow.next;
  let left = head;
  let right = reverseList(slow);
  while (right) {
    if (left.val != right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};