function minOperations(nums: number[], x: number): number {
    let target = nums.reduce((acc, num) => acc + num, 0) - x

    if (target < 0) return -1
    if (target === 0) return nums.length

    let maxLength = -1
    let l = 0
    let sum = 0

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r]

        while (sum > target && l <= r) {
            sum -= nums[l]
            l++
        }

        if (sum === target) {
            console.log("reaching here")
            maxLength = Math.max(maxLength, r - l + 1)
        }
    }


    return maxLength === -1 ? -1 : nums.length - maxLength
};