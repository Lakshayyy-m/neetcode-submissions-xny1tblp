function maxArea(height: number[]): number {
    // Eg => [1, 8, 6, 3, 5, 4, 8, 3, 7]
    let maxArea = -Infinity
    // Two pointer approach -> Start at corners, calcualte area, update maxArea, move in for the height that is smaller to maximize area as much as we can
    let l = 0
    let r = height.length - 1
    while (l < r) {
        let area = (r - l ) * Math.min(height[l], height[r])
        maxArea = Math.max(maxArea, area)
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }


    return maxArea
};

// Pattern Recognition 
// 1. Constraint Analysis -> Unsorted Array length n which is very big. Only options -> Two Pointers, Sliding Window, DP, Greedy/
// 2. Input Analysis -> unsorted array. Same as above.
// 3. Output Analysis -> Return Amount -> I would still say same as above. Cool.