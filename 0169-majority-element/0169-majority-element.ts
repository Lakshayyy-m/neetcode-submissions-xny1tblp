function majorityElement(nums: number[]): number {
    let result: number = 0
    let voteBalance = 0
    for (let num of nums) {
        if (voteBalance === 0) {
            result = num
        }

        if (result === num) {
            voteBalance++
        } else {
            voteBalance--
        }
    }

    return result

};

// Pattern recognition
// 1. Constraint -> Nums length very large. Need two pointers, sliding window, DP, greedy
//2. Input -> array. Same as above.