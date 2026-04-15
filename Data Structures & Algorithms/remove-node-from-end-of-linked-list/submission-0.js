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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let lP = head
        let length = 0
        while(lP){
            length++
            lP = lP.next
        }
        let prev = new ListNode()
        let current = head
        for(let i = 1; i < length-n+1; i++){
            prev = current
            current = current.next
        }
        console.log(length, prev, current)
        if(current === head){
            head = head.next
        } else {
            prev.next = current.next
        }
        console.log(head)
        return head
    }
}
