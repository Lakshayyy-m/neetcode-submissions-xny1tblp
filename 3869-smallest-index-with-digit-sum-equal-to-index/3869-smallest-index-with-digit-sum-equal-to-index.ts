function smallestIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        let numString = nums[i].toString()
        let sum = 0
        for (let char of numString) {
            sum += +char
        }
        if (sum === i) {
            return i
        }
    }

    return -1
};