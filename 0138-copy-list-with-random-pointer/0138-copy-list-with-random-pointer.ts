/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null
    const newHead = new _Node(head.val)
    let currentNodeReference = newHead
    let oldIndexMap: Map<_Node, number> = new Map()
    oldIndexMap.set(head, 0)
    let newIndexMap: Map<number, _Node> = new Map()
    newIndexMap.set(0, currentNodeReference)
    let indexCounter = 0
    let headPointer = head
    while (headPointer.next) {
        headPointer = headPointer.next
        indexCounter++
        oldIndexMap.set(headPointer, indexCounter)
        let nextNode = new _Node(headPointer.val)
        currentNodeReference.next = nextNode
        currentNodeReference = nextNode
        newIndexMap.set(indexCounter, currentNodeReference)
    }

    headPointer = head
    currentNodeReference = newHead
    while (headPointer) {
        if (headPointer.random) {
            currentNodeReference.random = newIndexMap.get(oldIndexMap.get(headPointer.random))
        }
        headPointer = headPointer.next
        currentNodeReference = currentNodeReference.next
    }


    return newHead
};

// Pattern Recognition
// 1. Constraint -> n not too big, But since Linked List, I would have to do a whole search. No DP, tree, sliding window or anything like that.
// Its a linked list question