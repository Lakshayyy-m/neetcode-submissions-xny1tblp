class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;
        let l = 0;
        let r = 0;
        while (r < prices.length) {
            let profit = prices[r] - prices[l];
            if (profit > 0) {
                max = Math.max(max, profit);
                r++;
            } else {
                l = r;
                r = r + 1;
            }
        }

        return max;
    }
}
