class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // Using a string key "index-holding" for memoization
        const memo = new Map<string, number>();

        const dfs = (index: number, holding: boolean): number => {
            if (index >= prices.length) return 0;

            const key = `${index}-${holding}`;
            if (memo.has(key)) return memo.get(key)!;

            let result = 0;

            if (!holding) {
                // Choice 1: Skip buying today
                const skip = dfs(index + 1, false);
                // Choice 2: Buy today (deducts money)
                const buy = -prices[index] + dfs(index + 1, true);

                result = Math.max(skip, buy);
            } else {
                // Choice 1: Skip selling today
                const skip = dfs(index + 1, true);
                // Choice 2: Sell today (adds money)
                const sell = prices[index] + dfs(index + 1, false);

                result = Math.max(skip, sell);
            }

            memo.set(key, result);
            return result;
        };

        // Start on day 0, not holding any stock
        return dfs(0, false);
    }
}
