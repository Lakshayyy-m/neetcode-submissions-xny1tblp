function trap(height: number[]): number {
    // two pointers approach
    let left = 0
    let right = height.length - 1
    let maxLeft = height[left]
    let maxRight = height[right]
    let result = 0
    while (left < right) {
        maxLeft = Math.max(maxLeft, height[left])
        maxRight = Math.max(maxRight, height[right])
        if (maxLeft < maxRight) {
            let waterTrapped = maxLeft - height[left]
            result += waterTrapped
            left++
        } else {
            let waterTrapped = maxRight - height[right]
            result += waterTrapped
            right--
        }
    }

    return result
};

// Pattern Recognition
// 1. Constraints -> n is very big. It has to sliding window, two pointer, greedy search or DP
// 2. Input analysis -> Array, same as above
// 3. Output analysis -> how much water (integer), again same as above.
// No sliding window. No DP because no subproblem.