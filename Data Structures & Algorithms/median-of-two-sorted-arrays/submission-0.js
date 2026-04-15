class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1
        let B = nums2
        let total = nums1.length + nums2.length
        let half = Math.floor((total + 1) / 2)
        if (B.length < A.length) {
            [A, B] = [B, A];
        }
        let l = 0
        let r = A.length

        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            let secondMid = half - mid

            const Aleft = mid > 0 ? A[mid - 1] : Number.MIN_SAFE_INTEGER;
            const Aright = mid < A.length ? A[mid] : Number.MAX_SAFE_INTEGER;
            const Bleft = secondMid > 0 ? B[secondMid - 1] : Number.MIN_SAFE_INTEGER;
            const Bright = secondMid < B.length ? B[secondMid] : Number.MAX_SAFE_INTEGER;

            if (Aleft <= Bright && Bleft <= Aright) {
                if (total % 2) {
                    //odd
                    return Math.max(Aleft, Bleft)
                } else {
                    return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
                }
            } else if (Aleft > Bright) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return -1
    }
}
