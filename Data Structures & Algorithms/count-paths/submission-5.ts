class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        let result = 0;
        const memo = {};
        const dfs = (row, col) => {
            if (row < 0 || col < 0 || row >= m || col >= n) {
                return 0;
            }
            if (memo[`${row}#${col}`]) return memo[`${row}#${col}`];

            if (row === m - 1 && col === n - 1) {
                return 1;
            }
            memo[`${row}#${col}`] = dfs(row + 1, col) + dfs(row, col + 1);
            return memo[`${row}#${col}`];
        };

        result += dfs(0, 0);

        return result;
    }
}
