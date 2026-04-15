class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length === 1 && target === nums[0]) return 0
        let l = 0
        let r = nums.length - 1
        let mid
        while (l < r) {
            mid = Math.floor((l + r) / 2)
            if (nums[mid] === target) return mid
            if (nums[l] === target) return l
            if (nums[r] === target) return r
            if (r - l === 1) {
                break
            }
            if (nums[mid] > nums[r]) {
                //unsorted
                if (target > nums[mid] || target <= nums[r]) {
                    l = mid
                } else {
                    r = mid
                }
            } else {
                //sorted
                if (target > nums[mid] && target <= nums[r]) {
                    l = mid
                } else {
                    r = mid
                }
            }
        }

        return -1
    }
}
