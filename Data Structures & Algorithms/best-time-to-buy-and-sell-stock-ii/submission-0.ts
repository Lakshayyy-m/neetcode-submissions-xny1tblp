class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let result = 0;
        // go through each index, if got profit, explore any more buying opportunities
        const dfs = (index: number) => {
            let maximumProfit = 0;
            let profit = 0;
            for (let i = index; i < prices.length; i++) {
                profit = 0;
                for (let j = i + 1; j < prices.length; j++) {
                    if (prices[j] > prices[i]) {
                        maximumProfit = Math.max(maximumProfit, prices[j] - prices[i] + dfs(j + 1));
                    }
                }
            }
            return maximumProfit;
        };

        let maxProfitReturned = dfs(0);
        console.log(maxProfitReturned);
        return maxProfitReturned;
    }
}
