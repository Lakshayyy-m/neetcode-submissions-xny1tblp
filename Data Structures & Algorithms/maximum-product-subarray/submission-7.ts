class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let max = 1;
        let min = 1;
        let result = nums[0];

        for (let i = 0; i < nums.length; i++) {
            let temp = max * nums[i];
            max = Math.max(nums[i], max * nums[i], min * nums[i]);
            min = Math.min(nums[i], min * nums[i], temp);
            result = Math.max(result, max)
        }

        return result;
    }
}
