class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (target === nums[mid]) return mid;
            if (nums[mid] > nums[r]) {
                // we are in the unsorted array
                if (target <= nums[r] || target > nums[mid]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                // sorted array
                if (target > nums[r]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        if (nums[r] === target) return r;

        return -1;
    }
}
