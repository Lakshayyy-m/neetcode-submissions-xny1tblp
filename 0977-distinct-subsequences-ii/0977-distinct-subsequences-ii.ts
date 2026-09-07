function distinctSubseqII(s: string): number {
    const MOD = 10 ** 9 + 7;
    const dp = new Array(s.length + 1).fill(1);
    const last: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
        dp[i + 1] = (dp[i] * 2) % MOD;

        if (s[i] in last) {
            dp[i + 1] = (dp[i + 1] - dp[last[s[i]]] + MOD) % MOD;
        }

        last[s[i]] = i;
    }

    return (dp[s.length] - 1 + MOD) % MOD;
}