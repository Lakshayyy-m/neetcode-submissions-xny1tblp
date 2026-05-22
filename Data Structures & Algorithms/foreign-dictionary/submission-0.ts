class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        const result = [];
        const seen = new Set<string>();

        for (let word of words) {
            if (!seen.has(word[0])) {
                seen.add(word[0]);
                result.push(word[0]);
            }
        }

        console.log(result.join(""))

        return result.join("")
    }
}
