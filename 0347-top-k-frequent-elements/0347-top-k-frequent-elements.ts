function topKFrequent(nums: number[], k: number): number[] {
    // Calculate Frequency and save in Hashmap
    const frequency: Record<string, number> = {}

    for (let num of nums) { // O(n)
        frequency[num] = (frequency[num] ?? 0) + 1
    }

    let sortedFrequency = Object.entries(frequency)
    sortedFrequency.sort((a, b) => {
        return b[1] - a[1]
    })
    const result = []
    for (let i = 0; i < k; i++) {
        result.push(+sortedFrequency[i][0])
    }


    return result
};