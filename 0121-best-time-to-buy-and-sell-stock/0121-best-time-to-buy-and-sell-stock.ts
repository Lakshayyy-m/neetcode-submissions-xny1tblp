function maxProfit(prices: number[]): number {
    let maxProfit = 0

    let l = 0
    let r = 0

    while (r < prices.length) {
        if (prices[r] < prices[l]) {
            l = r
        } else {
            maxProfit = Math.max(prices[r] - prices[l], maxProfit)
        }
        r++
    }

    return maxProfit
};