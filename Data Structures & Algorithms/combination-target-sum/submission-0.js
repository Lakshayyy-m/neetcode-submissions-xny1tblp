class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = []


        const dfs = (sum, combination, index) => {
            if (target === sum) {
                return result.push([...combination])
            }
            if (target < sum || index >= nums.length) {
                return
            }
            combination.push(nums[index])
            dfs(sum + nums[index], combination, index)

            combination.pop()
            dfs(sum, combination, index + 1)
        }

        dfs(0, [], 0)

        return result;
    }

}
