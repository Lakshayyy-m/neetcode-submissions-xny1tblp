class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0
        let r = matrix.length - 1
        let range;

        while (l <= r) {
            if (matrix.length === 1) {
                range = 0
                break
            }

            if (r - l === 1) {
                if (target < matrix[r][0]) {
                    range = l
                    break;
                } else {
                    range = r
                    break;
                }
            }
            let mid = Math.floor((l + r) / 2)
            if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
                range = mid
            }
            if (target < matrix[mid][0]) {
                r = mid
            } else {
                l = mid
            }
        }

        //array secured, now normal binary search

        const nums = matrix[range]
        console.log(range)
        if (nums.length === 1) {
            if (nums[0] === target) {
                return true
            } else {
                return false
            }
        }
        l = 0
        r = nums.length - 1
        while (l < r) {
            let mid = Math.floor((l + r) / 2)
            if (nums[mid] === target) return true
            if (r - l === 1) {
                if (nums[r] === target || nums[l] === target) {
                    return true
                } else return false
            }
            if (nums[mid] > target) {
                r = mid
            } else {
                l = mid
            }
        }

        return false














    }
}
