function removeDuplicates(nums: number[]): number {
    let candidateIndex = null
    let seen = new Map<number, number | null>()
    let newSeen = new Set<number>()
    // the map will store the value that has been seen and the first duplicate index
    for (let i = 0; i < nums.length; i++) {
        if (newSeen.has(nums[i])) {
            if (candidateIndex === null) {
                candidateIndex = i
            }
        } else {
            if (candidateIndex !== null) {
                nums[candidateIndex] = nums[i]
                candidateIndex++
            }
            newSeen.add(nums[i])
        }


        // let check = seen.get(nums[i])
        // if (check !== undefined) {
        //     // We have seen this before
        //     if (check === null) {
        //         // The current index should be the place to keep the first non duplicate character
        //         seen.set(nums[i], i)
        //     }
        // } else {

        // }
    }

    return newSeen.size

    // return nums
};

// Pattern recognition
// 1. Constraint Analysis -> Nums is very fucking large. complexity needs to be O(n) or lower. Two Pointers, binary search, DP, greedy, sliding window
// 2. Input Analysis -> Sorted array -> Binary search or two pointers.