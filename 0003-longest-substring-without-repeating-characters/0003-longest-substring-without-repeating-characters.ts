function lengthOfLongestSubstring(s: string): number {
    if (s.length <= 1) return s.length
    let seen = new Set()
    let l = 0
    let r = 0
    let result = 0
    seen.add(s[r])
    while (r < s.length - 1) {
        r++
        while (seen.has(s[r])) {
            seen.delete(s[l])
            l++
        }
        seen.add(s[r])
        result = Math.max(result, r - l + 1)
    }

    return result
};