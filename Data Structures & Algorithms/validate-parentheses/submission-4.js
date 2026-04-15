class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for (let char of s) {

            if ((char === ")" && stack[stack.length - 1] === "(") || (char === "}" && stack[stack.length - 1] === "{") || (char === "]" && stack[stack.length - 1] === "[")) {
                stack.pop()
                continue
            }

            stack.push(char)
        }

        if (stack.length === 0) {
            return true
        }

        return false
    }
}
