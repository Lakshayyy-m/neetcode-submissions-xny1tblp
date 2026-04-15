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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head || !head.next) return false
        let fastPointer = head
        let slowPointer = head
        while(fastPointer  && fastPointer.next){
            fastPointer = fastPointer?.next?.next
            slowPointer = slowPointer.next
            if(fastPointer == slowPointer){
                return true
            }
        }

        return false
    }
}
