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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let dummy = new ListNode();
        let head = dummy
        while (true) {
            let minNode = { index: null, val: Infinity }
            for (let i = 0; i < lists.length; i++) {
                if(!lists[i]) continue
                if (Math.min(minNode.val, lists[i]?.val ?? Infinity) === lists[i]?.val) {
                    minNode.val = lists[i].val
                    minNode.index = i
                }
            }
            if (minNode.index === null) {
                break;
            }
            dummy.next = lists[minNode.index]
            dummy = dummy.next
            lists[minNode.index] = lists[minNode.index].next
        }

        return head.next;
    }
}
