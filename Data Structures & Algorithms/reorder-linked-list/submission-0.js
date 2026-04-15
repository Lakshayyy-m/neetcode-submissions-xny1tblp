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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        //slow should be in the middle by now
        let prev = null
        let current = slow
        let next 
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        //prev should be at the end with second half of the list reversed
        let dummyNode = new ListNode()
        let nodeToReturn = head
        while(prev !==null){
            if(head !==prev){
            dummyNode.next = head
            head = head.next
            dummyNode = dummyNode.next
            }

            dummyNode.next = prev
            prev = prev.next
            dummyNode = dummyNode.next
        }


        return nodeToReturn
    }
}
