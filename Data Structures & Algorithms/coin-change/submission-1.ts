class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        if (amount === 0) return 0;
        coins.sort()
        let coinsUsed = 0;
        let amountLeft = amount;
        let index = coins.length - 1;
        while (amountLeft > 0 && index > -1) {
            if (amountLeft >= coins[index]) {
                // this is the biggest denomination I can subtract
                amountLeft -= coins[index];
                coinsUsed++;
            } else {
                index--;
            }
        }

        if(amountLeft > 0) {
            return -1
        }

        return coinsUsed
    }
}
