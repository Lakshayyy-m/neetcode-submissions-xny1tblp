class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        for (let word in wordDict) {
            let checkCounter = word.length-1;
            let stringPointer = 0;
            let wordPointer = 0;
            while (stringPointer < s.length && wordPointer < word.length) {
                if (s[stringPointer] === word[wordPointer]) {
                    checkCounter--;
                    stringPointer++;
                    wordPointer++;
                } else {
                    stringPointer++;
                }
            }
            console.log(checkCounter)
            if (checkCounter !== 0) return false;
        }

        return true;
    }
}
