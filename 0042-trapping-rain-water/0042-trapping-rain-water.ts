function trap(height: number[]): number {


    let l = 0
    let r = height.length - 1
    let leftMax = height[l]
    let rightMax = height[r]
    let result = 0

    while (l < r) {
        leftMax = Math.max(height[l], leftMax)
        rightMax = Math.max(height[r], rightMax)

        if (leftMax < rightMax) {
            // we can store water on the left end
            result += leftMax - height[l]
            l++
        } else {
            result += rightMax - height[r]
            r--
        }
    }


    return result
};