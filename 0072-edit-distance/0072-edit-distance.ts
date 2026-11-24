function minDistance(word1: string, word2: string): number {
    const cache = Array.from({ length: word1.length }, () => Array.from({
        length: word2.length
    }, () => -1))

    const minDistance = (index1: number, index2: number) => {
        if (word1.length === index1 && word2.length === index2) return 0
        if (word1.length === index1) return word2.length - index2
        if (word2.length === index2) return word1.length - index1
        if (cache[index1][index2] !== -1) return cache[index1][index2]
        if (word1[index1] === word2[index2]) return minDistance(index1 + 1, index2 + 1)
        const ins = 1 + minDistance(index1, index2 + 1)
        const del = 1 + minDistance(index1 + 1, index2)
        const rep = 1 + minDistance(index1 + 1, index2 + 1)

        return cache[index1][index2] = Math.min(ins, del, rep)
    }

    return minDistance(0, 0)
};


// Analysis
// 1. Constraint -> word length is not too big so brute force is somewhat possibble.
// 2. Input -> String. sliding window, two pointers, brute force.