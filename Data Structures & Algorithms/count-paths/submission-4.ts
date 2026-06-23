class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        if (m === 1 && n === 1) return 1;
        let memo = Array.from({ length: m }, () => new Array(n).fill(null));
        memo[m - 1][n - 1] = 1;
        const dfs = (x: number, y: number) => {
            if (x > m - 1 || y > n - 1) {
                return 0; // if out of bounds, don't process this position
            }
            if (memo[x][y]) return memo[x][y];
            memo[x][y] = 0;

            memo[x][y] += dfs(x + 1, y) + dfs(x, y + 1);

            return memo[x][y];
        };

        return dfs(0,0)
    }
}
