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

            if (nums[l] < nums[mid]) {
                // mid is in the left sorted portion
                if (target < nums[l]) {
                    //discard left
                    l = mid + 1;
                } else {
                    //discard right
                    r = mid - 1;
                }
            } else {
                // mid is in the right sorted ported
                if (target > nums[r]) {
                    // discard right
                    r = mid - 1;
                } else {
                    // discard left
                    l = mid + 1;
                }
            }
        }
        if(nums[r] === target) return r

        return -1;
    }
}
