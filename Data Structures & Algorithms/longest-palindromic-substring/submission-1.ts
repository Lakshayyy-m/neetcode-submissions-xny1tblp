class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        // input string s
        // find longest palindrome.

        // Find a palindrome and determine its length
        // ababd | bab

        // Given a big string, how do I find if a palindrome exists in it
        // Can't figure out how to traverse the string
        // const palindromes = new Set<string>();
        let longestPalindrome = { start: null, end: null, length: 0 };
        for (let i = 0; i < s.length; i++) {
            for (let j = 1; j < s.length; j++) {
                let subject = s.substring(i, j + 1);
                if (this.isPalindrome(subject)) {
                    // palindromes.add(`${i},${j}`);
                    longestPalindrome.length = Math.max(subject.length, longestPalindrome.length);
                    if (longestPalindrome.length === subject.length) {
                        longestPalindrome.start = i;
                        longestPalindrome.end = j;
                    }
                }
            }
        }

        return s.substring(longestPalindrome.start, longestPalindrome.end + 1);
    }

    isPalindrome(s: string) {
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
