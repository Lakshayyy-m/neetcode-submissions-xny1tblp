class MedianFinder {
    constructor() {
        this.h1 = new MaxPriorityQueue()
        this.h2 = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.h1.isEmpty() && this.h2.isEmpty()) {
            this.h1.enqueue(num)
            return
        }

        if (this.h1.front() <= num) {
            this.h2.enqueue(num)
        } else {
            this.h1.enqueue(num)
        }

        while ((this.h1.size() - this.h2.size()) > 1) {
            this.h2.enqueue(this.h1.dequeue())
        }
        while ((this.h2.size() - this.h1.size()) > 1) {
            this.h1.enqueue(this.h2.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.h1.isEmpty() && this.h2.isEmpty()) {
            return null
        }

        if ((this.h1.size() + this.h2.size()) % 2 === 0) {
            return (this.h1.front() + this.h2.front()) / 2
        } else {
            if (this.h1.size() > this.h2.size()) {
                return this.h1.front()
            } else {
                return this.h2.front()
            }
        }
    }
}
