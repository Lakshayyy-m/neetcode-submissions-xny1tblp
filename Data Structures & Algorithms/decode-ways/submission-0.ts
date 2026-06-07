class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const dp = { [s.length]: 1 };

        const dfs = (index: number) => {
            if (dp[index]) return dp[index];
            if (s[index] === "0") return 0;

            let result = dfs(index + 1); // single digit case
            if (
                index + 1 < s.length &&
                (s[index] === "1" || (s[index] === "2" && "0123456".indexOf(s[index + 1]) !== -1))
            ) {
                // double digit case
                result += dfs(index + 2);
            }
            dp[index] = result;
            return result;
        };

        return dfs(0);
    }
}
