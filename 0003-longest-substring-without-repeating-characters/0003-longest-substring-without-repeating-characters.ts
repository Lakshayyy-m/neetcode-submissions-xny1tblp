function lengthOfLongestSubstring(s: string): number {
    if (s.length <= 1) return s.length
    let maxLength = 1
    let l = 0
    let r = 1
    let seenSet = new Set<string>()
    seenSet.add(s[l])
    while (r < s.length) {
        while (seenSet.has(s[r])) {
            seenSet.delete(s[l])
            l++
        }
        seenSet.add(s[r])
        let newLength = r - l + 1
        maxLength = Math.max(newLength, maxLength)
        r++
    }
    return maxLength
};


// Pattern Recognition 
// 1. Constraint analysis ->. s.length is very high so this will be two-pointers, sliding window, dp (maybe), greedy
// 2. Input analysis -> String, so the above stands.