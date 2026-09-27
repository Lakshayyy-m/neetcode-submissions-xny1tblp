function maxArea(height: number[]): number {
    // The water being stored would be the area between them (lenght x breadt(height))
    let l = 0
    let r = height.length - 1
    let maxArea = (r - l) * Math.min(height[l], height[r])

    while (l < r) {
        if (height[l] <= height[r]) {
            l++
        } else {
            r--
        }
        maxArea = Math.max(maxArea, (r - l) * Math.min(height[l], height[r]))
    }

    return maxArea
};