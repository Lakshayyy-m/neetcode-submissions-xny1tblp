function vowelStrings(words: string[], queries: number[][]): number[] {
    let prefixTracker = 0
    let prefixArray = []
    let vowels = new Set(["a", "e", "i", "o", 'u'])
    for (let i = 0; i < words.length; i++) {
        if (vowels.has(words[i].at(0)) && vowels.has(words[i].at(-1))) {
            prefixTracker++
        }
        prefixArray.push(prefixTracker)
    }
    const result = []
    for (let i = 0; i < queries.length; i++) {
        let [queryStart, queryEnd] = queries[i]
        let prefixEnd = prefixArray[queryEnd]
        let prefixStart = queryStart === 0 ? 0 : prefixArray[queryStart - 1]
        result.push(prefixEnd - prefixStart)
    }

    console.log(result)

    return result
};

// Pattern Recognition
// 1. Constraint -> There are a lot of queries so going through the same amount of indices again and again is not the best. Need to save that solution(DP). No brute force!
// Need to find a way to save the solution so that I don't have to revisit it again
