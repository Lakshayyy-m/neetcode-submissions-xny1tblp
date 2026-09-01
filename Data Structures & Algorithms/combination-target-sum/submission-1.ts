class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result = [];

        const dfs = (index: number, sum: number, localList: number[]) => {
            if (sum === target) {
                return result.push([...localList]);
            } else if (sum > target) {
                return;
            }
            for (let i = index; i < nums.length; i++) {
                localList.push(nums[i]);
                dfs(i, sum + nums[i], localList);
                localList.pop();
            }
        };

        // for (let i = 0; i < nums.length; i++) {
        //     dfs(i, nums[i], [nums[i]]);
        // }
        dfs(0, 0, []);

        return result;
    }
}
