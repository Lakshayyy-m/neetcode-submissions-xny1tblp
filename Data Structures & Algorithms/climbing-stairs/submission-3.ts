class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 1) return 1;
        const memoize = {};

        // Finding the number of distinct ways
        // The decision tree will be divided in 2 paths always (1 step taken and 2 steps taken)
        // decision tree works, good
        // Now we need to figure out memoization

        function climb(n: number, step: number): number {
            // if (memoize[n]) return memoize[n];
            if (n <= 1) return 1;
            return climb(n - step, 1) + climb(n - step, 2);
            memoize[n] = climb(n - step, 1) + climb(n - step, 2);
            return memoize[n];
        }

        return climb(n - 1, 1) + climb(n - 2, 2);
    }
}
