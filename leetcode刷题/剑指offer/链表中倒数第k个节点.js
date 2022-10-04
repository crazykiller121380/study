/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  let point1 = head;
  let point2 = head;
  for (let i=0; i<k-1; i++) {
    point2 = point2.next;
  }
  while(point2.next) {
    point1 = point1.next;
    point2 = point2.next;
  }
  return point1;
};