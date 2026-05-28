class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        // Given houses nums, 0 to i-1
        // Can't process i that are together. The minimum step can only be 2
        // No point in doing more then 2 steps and leaving money on the table
        // start at 1st and 2nd element. DFS to i+1 and i+2 elements. No point in doing i+3 as you can always take i+1 and do it
        // Example [1, 1, 3, 3] = 4
        if (nums.length === 1) return nums[0];
        const memo = new Array(nums.length).fill(null);

        const dfs = (index: number) => {
            if (memo[index]) return memo[index];
            let house = nums[index];
            let maxPathSum = 0;
            if (nums.length > index + 3) {
                // both of them exist
                maxPathSum = Math.max(dfs(index + 2), dfs(index + 3));
            } else if (nums.length > index + 2) {
                // one jump possible
                maxPathSum = nums[index + 2];
            }
            memo[index] = house + maxPathSum;
            return house + maxPathSum;
        };

        return Math.max(dfs(0), dfs(1));
    }
}
