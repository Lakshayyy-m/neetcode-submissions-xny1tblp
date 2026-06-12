class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const memo = {};
        // go through each index, if got profit, explore any more buying opportunities
        const dfs = (index: number) => {
            if (memo[index]) return memo[index];
            let maximumProfit = 0;

            for (let i = index; i < prices.length; i++) {
                for (let j = i + 1; j < prices.length; j++) {
                    if (prices[j] > prices[i]) {
                        maximumProfit = Math.max(maximumProfit, prices[j] - prices[i] + dfs(j + 1));
                    }
                }
            }

            memo[index] = maximumProfit;

            return maximumProfit;
        };

        let maxProfitReturned = dfs(0);
        return maxProfitReturned;
    }
}
