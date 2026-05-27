class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char)
            }

            if (char === ")" && stack[stack.length - 1] === "(") {
                stack.pop()
            }

            if (char === "}" && stack[stack.length - 1] === "{") {
                stack.pop()
            }

            if (char === "]" && stack[stack.length - 1] === "[") {
                stack.pop()
            }
        }

        if (stack.length === 0) {
            return true
        }

        return false
    }
}
