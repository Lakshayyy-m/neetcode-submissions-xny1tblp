function numDecodings(s: string): number {
    const dp = { [s.length]: 1 }


    const recurse = (index: number): number => {
        if (dp[index] !== undefined) return dp[index]
        if (s[index] === "0") return 0
        let result = recurse(index + 1)
        if (index + 1 < s.length && (s[index] === "1" || s[index] === "2" && +s[index + 1] < 7)) {
            result += recurse(index + 2)
        }

        dp[index] = result
        return dp[index]
    }

    return recurse(0)

};


// Pattern matching
// Constraints -> s is small enough to afford exponential -> recursion, backtracking, brute force, etc.
// Keywords -> Number of ways/combinations -> Recursion or DP