class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxValue = nums[0];
        let currentSum = 0
        for (let num of nums) {
            if(currentSum < 0){
                currentSum = 0
            }
            currentSum += num
            maxValue = Math.max(currentSum, maxValue)
        }
        return maxValue;
    }
}
