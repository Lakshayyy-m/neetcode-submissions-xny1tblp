function countCommas(n: number): number {
    let numOfCommas = 0

    for (let divisor = 1000; divisor <= n; divisor *= 1000) {
        numOfCommas += n - divisor + 1
    }

    return numOfCommas
};