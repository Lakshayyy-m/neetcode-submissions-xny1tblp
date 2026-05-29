class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        // Basic house robber first and then the optimization
        // logic difference is that after the last index, we have the first one.
        if (nums.length < 4) return Math.max(...nums)
        const memo = new Array(nums.length).fill(null);

        const dfs = (index: number, isFirstValue: boolean = false) => {
            if (memo[index]) return memo[index];
            let valueToAdd = 0;
            if (nums.length > index + 3) {
                if (index + 3 === nums.length - 1 && isFirstValue) {
                    //if last element and first value starter
                    valueToAdd = nums[index + 2];
                } else {
                    valueToAdd = Math.max(
                        dfs(index + 2, isFirstValue),
                        dfs(index + 3, isFirstValue),
                    );
                }
            } else if (nums.length > index + 2) {
                if (!(index + 2 === nums.length - 1 && isFirstValue)) valueToAdd = nums[index + 2];
            }
            memo[index] = nums[index] + valueToAdd;
            return memo[index];
        };

        return Math.max(dfs(0, true), dfs(1));
    }
}
