class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const dp = new Array(s.length + 1).fill(false);
        dp[s.length] = true;

        for (let i = s.length - 1; i >= 0; i--) {
            for (let word of wordDict) {
                if (word.length <= s.length - i && s.substring(i, i + word.length) === word) {
                    dp[i] = dp[i + word.length];
                }
                if (dp[i]) break;
            }
        }
        console.log(dp);
        return dp[0];
    }
}
