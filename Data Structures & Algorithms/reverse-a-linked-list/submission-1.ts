/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return head;
        let C = head;
        let N = head?.next;
        let N2 = head.next?.next;
        C.next = null;
        while (N !== null && N !== undefined) {
            N.next = C;
            C = N;
            N = N2;
            N2 = N?.next;
        }

        return C;
    }
}
