class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
        this.min = Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        this.min = Math.min(this.min, val)
        if (this.min === val) {
            this.minStack.push(this.min)
        }
        console.log(this.min, val)

    }

    /**
     * @return {void}
     */
    pop() {
        const result = this.stack.pop()
        if (result === undefined) return
        if (result === this.min) {
            this.minStack.pop()
            if (this.minStack.length === 0) {
                this.min = Infinity
            } else {
                this.min = this.minStack[this.minStack.length - 1]
            }
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
