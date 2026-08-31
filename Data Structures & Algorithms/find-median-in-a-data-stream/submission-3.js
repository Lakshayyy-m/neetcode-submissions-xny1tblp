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
        if (this.minHeap.isEmpty() || this.minHeap.front() < num) {
            this.minHeap.enqueue(num);
        } else {
            this.maxHeap.enqueue(num);
        }

        // balance the heaps
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        } else if (this.minHeap.size() > this.maxHeap.size() + 1) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.front();
        } else if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front();
        } else {
            return (this.minHeap.front() + this.maxHeap.front()) / 2.0;
        }
    }
}
