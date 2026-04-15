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
        while(fastPointer !== null && fastPointer !== undefined){
            fastPointer = fastPointer?.next?.next
            slowPointer = slowPointer.next
                console.log(fastPointer, slowPointer)
            if(fastPointer == slowPointer){
                console.log(fastPointer, slowPointer)
                return true
            }
        }

        return false
    }
}
