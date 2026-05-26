class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let result = [];

        function climb(n: number, localResult: number[]) {
            if (n === 0) {
                result.push(localResult);
                return true;
            }
            if (n === 1) {
                return climb(n - 1, [...localResult, 1]);
            }
            for (let i = 1; i < 3; i++) {
                climb(n - i, [...localResult, i]);
            }
        }

        for (let i = 1; i < 3; i++) {
            if (n >= i) {
                climb(n - i, [i]);
            }
        }

        return result.length;
    }
}
