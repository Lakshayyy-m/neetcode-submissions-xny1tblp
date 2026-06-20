class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        let dp: number[] = new Array(nums.length).fill(1);

        for (let i = nums.length - 1; i >= 0; i--) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] < nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        return Math.max(...dp);
    }
}
