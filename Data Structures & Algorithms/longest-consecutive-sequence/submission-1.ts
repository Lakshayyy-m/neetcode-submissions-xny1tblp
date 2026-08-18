class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // Time -> O(nk) n-> Input array, k -> Largest subsequence

        const inputSet = new Set(nums);
        let maxSequence = 0;
        for (let key of inputSet) {
            let localSequence = 0;
            let keyCheck = key;
            if (inputSet.has(keyCheck - 1)) continue;
            while (inputSet.has(keyCheck)) {
                localSequence++;
                +keyCheck++;
            }
            maxSequence = Math.max(maxSequence, localSequence);
        }

        return maxSequence;
    }
}
