class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        if(nums.length === 1) return nums[0]
        let result = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let localProduct = nums[i];
            result = Math.max(result, localProduct)
            for (let j = i + 1; j < nums.length; j++) {
                localProduct *= nums[j];
                result = Math.max(result, localProduct);
            }
        }

        return result;
    }
}
