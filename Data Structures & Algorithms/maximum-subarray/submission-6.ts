class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let l = 0;
        let r = 0;
        let max = nums[0];
        let lastSum = nums[0];
        while (r < nums.length - 1) {
            if (nums[l] <= 0) {
                if (l === r) {
                    l++;
                    r = l;
                } else {
                    l++;
                }
                lastSum = nums[l];
                max = Math.max(max, lastSum);
                continue;
            }
            r++;
            if (lastSum + nums[r] <= 0 && r < nums.length - 1) {
                l = r + 1;
                r = r + 1;
                console.log(l);
                lastSum = nums[l];
            } else {
                lastSum += nums[r];
            }

            max = Math.max(max, lastSum);
        }
        return max;
    }
}
