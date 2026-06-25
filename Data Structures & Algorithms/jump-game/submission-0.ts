class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        const dp = new Array(nums.length).fill(false);
        dp[nums.length - 1] = true;
        for (let i = nums.length - 2; i >= 0; i--) {
            for (let j = 1; j <= nums[i]; j++) {
                if(dp[i+j]) {
                    dp[i] = true
                    break;
                }
            }
        }

        return dp[0]
    }
}
