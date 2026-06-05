class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let result = 0;

        for (let i = 0; i < s.length; i++) {
            // odd case
            let l = i;
            let r = i;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                result++;
                l--;
                r++;
            }
            // even case
            l = i;
            r = i + 1;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                result++;
                l--;
                r++;
            }
        }
        return result;
    }
}
