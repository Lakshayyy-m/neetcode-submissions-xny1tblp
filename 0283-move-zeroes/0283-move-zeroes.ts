/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
    }
}

// Pattern Recognition
// 1. Constraint Analysis -> Nums.length is very big so -> Two pointers, sliding window, greedy, DP
// 2. Input Anaysis -> Nums Array -> non sorted so no binary search. Two pointers, sliding window, DP, greedy
// 3. Output -> Same array. In place editing. requirement is moving of elements. -> Two pointer (very less likely DP)