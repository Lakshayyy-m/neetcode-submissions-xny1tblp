class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        //requirements
        // Letters same no matter you traverse from back or front -> Done
        // Case insensitive -> Done
        // Non alphanumeric chars skipped -> Check regex

        let l = 0;
        let r = s.length - 1;
        let regex = /^[a-z0-9]+$/;

        while (l < r) {
            while (!regex.test(s[l].toLowerCase())) {
                console.log(s[l]);
                l++;
            }
            while (!regex.test(s[r].toLowerCase())) {
                console.log(s[r]);
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                console.log(s[l], s[r]);
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
