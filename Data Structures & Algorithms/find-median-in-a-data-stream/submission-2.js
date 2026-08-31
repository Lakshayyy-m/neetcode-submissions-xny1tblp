class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.minHeap.enqueue(num);
        while (
            ((this.minHeap.size() + this.maxHeap.size()) % 2 === 0 &&
                this.minHeap.size() - this.maxHeap.size() !== 0) ||
            ((this.minHeap.size() + this.maxHeap.size()) % 2 !== 0 &&
                this.minHeap.size() - this.maxHeap.size() > 1)
        ) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }

        // may need to look at the balancing logic
        while (this.maxHeap.front() > this.minHeap.front()) {
            // swapping
            let temp1 = this.maxHeap.dequeue();
            let temp2 = this.minHeap.dequeue();
            this.maxHeap.enqueue(temp2);
            this.minHeap.enqueue(temp1);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.maxHeap.size() === 0){
            return this.minHeap.front()
        }
        // for odd
        if ((this.maxHeap.size() + this.minHeap.size()) % 2 !== 0) {
            return this.minHeap.front();
        }
        // for even
        else {
            return (this.maxHeap.front() + this.minHeap.front()) / 2;
        }
    }
}
