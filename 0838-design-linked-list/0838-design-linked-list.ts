class LinkNode {
    val: any
    next: LinkNode
    constructor(val: any = null) {
        this.val = val
        this.next = null
    }
}

class MyLinkedList {
    head: LinkNode | null
    size: number
    tail: LinkNode | null
    constructor() {
        this.head = null
        this.size = 0
        this.tail = null
    }

    get(index: number): number {
        if (index >= this.size || index < 0) return -1

        let node = this.head
        for (let i = 1; i <= index; i++) {
            node = node.next
        }

        return node.val
    }

    addAtHead(val: number): void {
        // if no node
        if (!this.head) {
            this.head = new LinkNode(val)
            this.tail = this.head
        } else {
            //if nodes exist
            let node = new LinkNode(val)
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    addAtTail(val: number): void {
        if (!this.head) {
            this.head = new LinkNode(val)
            this.tail = this.head
        } else {
            let node = new LinkNode(val)
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size || index < 0) return
        if (index === this.size) return this.addAtTail(val)
        if (index === 0) return this.addAtHead(val)

        let node = this.head
        for (let i = 1; i < index; i++) {
            try {
                node = node.next
            } catch (e) {
                console.log(this.get(index), i, node, this.size, index)
            }
        }
        let newNode = new LinkNode(val)
        let nextNode = node.next
        node.next = newNode
        newNode.next = nextNode
        this.size++
    }

    deleteAtIndex(index: number): void {
        if (index > this.size - 1 || index < 0) return
        if (this.size === 1) {
            this.head = null
            this.tail = null
            this.size = 0
            return
        }
        if (index === 0) {
            // delete head 
            this.head = this.head.next
        }
        else {
            let nodeBefore = this.head
            for (let i = 1; i < index; i++) {
                nodeBefore = nodeBefore.next
            }

            let temp = nodeBefore.next
            if (index === this.size - 1) {
                //deletion at tail
                nodeBefore.next = null
                this.tail = nodeBefore
            } else {
                nodeBefore.next = temp.next
            }
        }
        this.size--
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */