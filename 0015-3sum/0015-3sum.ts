function threeSum(nums: number[]): number[][] {
    const result: number[][] = []


    nums.sort((a, b) => a - b)
    let seenSet = new Set<string>()

    for (let i = 0; i < nums.length; i++) {
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            if (sum === 0 && !seenSet.has(`${nums[i]},${nums[l]},${nums[r]}`)) {
                seenSet.add(`${nums[i]},${nums[l]},${nums[r]}`)
                result.push([nums[i], nums[l], nums[r]])
            } else if (sum < 0) {
                l++
            } else {
                r--
            }
        }
    }


    return result
};

// Pattern recognition
// 1. Constraint analysis -> nums.length is 3000, this can exponentially increase if taken with brute force or recursion. So none of them can be possible here
// Either two pointer, DP, greedy
// 2. Output Analysis -> return numbers and not a combination. 