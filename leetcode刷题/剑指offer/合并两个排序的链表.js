/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  let prenode = new ListNode(-1);
  let res = prenode;
  while(l1 && l2) {
    if (l1.val < l2.val) {
      prenode.next = l1;
      l1 = l1.next;
    } else {
      prenode.next = l2;
      l2 = l2.next;
    }
    prenode = prenode.next;
  }
  if (l1) {
    prenode.next = l1;
  } else {
    prenode.next = l2;
  }
  return res.next;
};