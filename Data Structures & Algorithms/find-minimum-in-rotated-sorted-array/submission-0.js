class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        return nums[this.rotatedBinary(l, r, nums)]
    }

    rotatedBinary(l, r, nums) {
        if (nums[l] > nums[r]) {
            let mid = Math.floor((l + r) / 2)
            console.log(mid)
            return this.rotatedBinary(mid, r, nums)
        } else {
            //sorted
            if (nums[l - 1] && nums[l - 1] < nums[l]) {
                //min is not l, binary with r as mid
                let mid = Math.floor((l + r) / 2)
                return this.rotatedBinary(l, mid, nums)
            } else {
                //this is the min
                return l
            }

        }

    }


}
