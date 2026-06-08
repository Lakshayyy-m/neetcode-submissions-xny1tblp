class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        let result = -Infinity;
        const reverseProduct = new Array(nums.length);
        reverseProduct[nums.length - 1] = nums[nums.length - 1];
        for (let k = nums.length - 2; k >= 0; k--) {
            reverseProduct[k] = nums[k] * reverseProduct[k + 1];
        }
        console.log(reverseProduct);
        for (let i = 0; i < nums.length; i++) {
            let localProduct = nums[i];
            result = Math.max(result, localProduct);
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < 0 && reverseProduct[j] < 0) {
                    //encountered a negative
                    break;
                }
                localProduct *= nums[j];
                result = Math.max(result, localProduct);
            }
        }

        return result;
    }
}
