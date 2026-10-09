/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let pointer1 = l1
    let pointer2 = l2
    let head = new ListNode()
    let resultPointer = head
    let carryOver = 0
    while (pointer1 && pointer2) {
        let sum = pointer1.val + pointer2.val + carryOver
        carryOver = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10)
        resultPointer.next = newNode
        resultPointer = newNode
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }

    while (pointer1) {
        let sum = pointer1.val + carryOver
        carryOver = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10)
        resultPointer.next = newNode
        resultPointer = newNode
        pointer1 = pointer1.next
    }

    while (pointer2) {
        let sum = pointer2.val + carryOver
        carryOver = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10)
        resultPointer.next = newNode
        resultPointer = newNode
        pointer2 = pointer2.next
    }

    if (carryOver > 0) {
        resultPointer.next = new ListNode(carryOver)
    }

    return head.next
};
