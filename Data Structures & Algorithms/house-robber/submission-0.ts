class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        // Given houses nums, 0 to i-1
        // Can't process i that are together. The minimum step can only be 2
        // No point in doing more then 2 steps and leaving money on the table
        // Example [1, 1, 3, 3] = 4
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < nums.length; i += 2) {
            sum1 += nums[i] ?? 0;
            sum2 += nums[i + 1] ?? 0;
        }

        return Math.max(sum1, sum2)
    }
}
