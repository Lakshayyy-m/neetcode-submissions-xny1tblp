class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxValue = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let sum = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                sum += nums[j];
                maxValue = Math.max(sum, maxValue);
            }
            maxValue = Math.max(sum, maxValue);
        }
        return maxValue;
    }
}
