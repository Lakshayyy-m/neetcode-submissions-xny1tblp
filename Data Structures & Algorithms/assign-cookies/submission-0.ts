class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g: number[], s: number[]): number {
        // Assuming that the cookies and the greed is sorted.

        let i = 0; // Greed size pointer
        let j = 0; // Cookie Size pointer
        let counter = 0;
        while (i < g.length && j < s.length) {
            if(g[i] <= s[j]){
                // Cookie given, both can move forward
                counter++
                i++
                j++
            } else {
                j++
            }
        }

        return counter;
    }
}
