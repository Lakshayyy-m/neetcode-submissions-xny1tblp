class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        if(m === 1 && n === 1) return 1
        let result = 0;
        let memo = {};
        const dfs = (position: number[]) => {
            if (memo[`${position[0]}$${position[1]}`]) {
                return memo[`${position[0]}$${position[1]}`];
            }
            const possibleMoves = [
                [position[0] + 1, position[1]], // right
                [position[0], position[1] + 1], // down
            ];
            let numOfWays = 0; // num of possible ways
            for (let move of possibleMoves) {
                if (move[0] === m - 1 && move[1] === n - 1) {
                    return 1; // if reached in corner, return 1
                }
                if (move[0] > m - 1 || move[1] > n - 1) {
                    continue; // if out of bounds, don't process this position
                }
                numOfWays += dfs(move); // explore the position further
            }

            memo[`${position[0]}$${position[1]}`] = numOfWays;

            return numOfWays;
        };

        result = dfs([0, 0]);

        return result;
    }
}
