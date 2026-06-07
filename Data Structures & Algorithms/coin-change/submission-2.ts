class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        if (amount === 0) return 0;
        coins = coins.sort((a, b) => a - b);
        let coinsUsed = 0;
        let amountLeft = amount;
        let index = coins.length - 1;
        console.log(index, coins);

        while (amountLeft > 0 && index > -1) {
            if (amountLeft >= coins[index]) {
                // this is the biggest denomination I can subtract
                amountLeft -= coins[index];
                coinsUsed++;
                console.log(coinsUsed, amountLeft, coins[index]);
            } else {
                index--;
            }
        }

        if (amountLeft > 0) {
            return -1;
        }

        return coinsUsed;
    }
}
