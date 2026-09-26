function maximumCoins(coins: number[][], k: number): number {
    coins.sort(([l1, r1, c1], [l2, r2, c2]) => l1 - l2)
    let maxCoins = 0
    let currentCoins = 0
    let n = coins.length
    for (let i = 0, j = 0; i < n; i++) {
        const start = coins[i][0]
        const end = start + k - 1
        while (j < n && coins[j][1] <= end) {
            currentCoins += (coins[j][1] - coins[j][0] + 1) * coins[j][2]
            j++
        }

        if (j < coins.length && coins[j][0] <= end) {
            let partial = Math.max(0, (end - coins[j][0] + 1) * coins[j][2])
            maxCoins = Math.max(maxCoins, currentCoins + partial)
        }

        currentCoins -= (coins[i][1] - coins[i][0] + 1) * coins[i][2]

    }

    currentCoins = 0
    for (let i = 0, j = 0; i < n; i++) {
        currentCoins += (coins[i][1] - coins[i][0] + 1) * coins[i][2]

        while (coins[j][1] < coins[i][1] - k + 1) {
            currentCoins -= (coins[j][1] - coins[j][0] + 1) * coins[j][2]
            j++;
        }


        let partial = Math.max(0, (coins[i][1] - k - coins[j][0] + 1) * coins[j][2])
        maxCoins = Math.max(maxCoins, currentCoins - partial)
    }

    return maxCoins
};