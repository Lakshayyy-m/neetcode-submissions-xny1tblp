class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        let smallest = Infinity;
        let dp = new Array(nums.length + 1);
        dp[nums.length] = 0;

        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] < smallest) {
                dp[i] = dp[i + 1] + 1;
                smallest = nums[i];
            } else {
                dp[i] = dp[i + 1];
            }
        }

        return dp[0]
    }
}
