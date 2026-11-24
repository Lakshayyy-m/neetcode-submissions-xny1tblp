function minDistance(word1: string, word2: string): number {
    const cache = {}

    const minDistance = (fromWord: string, toWord: string) => {
        if (fromWord.length === 0 && toWord.length === 0) return 0
        if (fromWord.length === 0) return toWord.length
        if (toWord.length === 0) return fromWord.length
        const cacheEntry = `${fromWord}#${toWord}`
        if (cache[cacheEntry]) return cache[cacheEntry]
        if (fromWord[0] === toWord[0]) return minDistance(fromWord.substring(1), toWord.substring(1))
        const ins = 1 + minDistance(fromWord, toWord.substring(1))
        const del = 1 + minDistance(fromWord.substring(1), toWord)
        const rep = 1 + minDistance(fromWord.substring(1), toWord.substring(1))

        return cache[cacheEntry] = Math.min(ins, del, rep)
    }

    return minDistance(word1, word2)
};


// Analysis
// 1. Constraint -> word length is not too big so brute force is somewhat possibble.
// 2. Input -> String. sliding window, two pointers, brute force.