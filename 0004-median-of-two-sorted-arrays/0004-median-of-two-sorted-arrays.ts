function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    let totalLength = nums1.length + nums2.length
    let left = 0
    let right = nums1.length - 1
    while (true) {
        let mid1 = Math.floor((right + left) / 2)
        let mid2 = (Math.floor(totalLength / 2) - 1) - (mid1 + 1)
        let Aleft = mid1 >= 0 ? nums1[mid1] : -Infinity
        let Aright = mid1 + 1 < nums1.length ? nums1[mid1 + 1] : Infinity
        let Bleft = mid2 >= 0 ? nums2[mid2] : -Infinity
        let Bright = mid2 + 1 < nums2.length ? nums2[mid2 + 1] : Infinity
        if (Aleft <= Bright && Bleft <= Aright) {
            if (totalLength % 2) {
                return Math.min(Aright, Bright)
            } else {
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
            }
        } else if (Aleft > Bright) {
            right = mid1 - 1
        } else {
            left = mid1 + 1
        }

    }
};

// Pattern Recognition
// 1. Constraint Analysis -> not too large. 
// 2. Input Analysis -> 2 sorted arrays. 2 pointers, binary search, prefix array.
// 3. Division needs to happen in exactly half

// [1, 3, 5, 7, 9] & [2, 4, 6, 7, 8, 10]