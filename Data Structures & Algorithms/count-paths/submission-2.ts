class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        if (m === 1 && n === 1) return 1;
        let result = 0;
        let memo = {};
        memo[`${m - 1}$${n - 1}`] = 1;
        const dfs = (x: number, y: number) => {
            if (memo[`${x}$${y}`]) {
                return memo[`${x}$${y}`];
            }
            if (x > m - 1 || y > n - 1) {
                return 0; // if out of bounds, don't process this position
            }
            let numOfWays = 0; // num of possible ways

            numOfWays += dfs(x + 1, y) + dfs(x, y + 1);

            memo[`${x}$${y}`] = numOfWays;

            return numOfWays;
        };

        result = dfs(0, 0);

        return result;
    }
}
