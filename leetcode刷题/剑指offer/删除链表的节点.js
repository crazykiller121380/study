/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
  let yuanhead = head;
  if (head.val == val) {
    return head.next;
  }
  while(head.next) {
    if (head.next.val == val) {
      head.next = head.next.next;
      return yuanhead;
    }
    head = head.next;
  }
};