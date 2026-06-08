class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        if (amount === 0) return 0;
        const memo = {};
        const dfs = (amountLeft: number) => {
            if (amountLeft === 0) return 0;
            if (memo[amountLeft]) return memo[amountLeft];
            let result = Infinity;
            for (let coin of coins) {
                if (coin > amountLeft) continue;
                result = Math.min(result, dfs(amountLeft - coin));
            }
            memo[amountLeft] = result + 1;
            return result + 1;
        };

        const finalResult = dfs(amount);

        return finalResult === Infinity ? -1 : finalResult;
    }
}
