const candidates = {
    OPEN: "(",
    CLOSE: ")"
}
function generateParenthesis(n: number): string[] {
    let result = []
    let parenthesisStack = []
    // Recursion
    const generate = (nLeft: number, current: string) => {
        if (nLeft === 0) {
            for (let i = 0; i < parenthesisStack.length; i++) {
                current += candidates.CLOSE
            }
            result.push(current)
            return
        }
        parenthesisStack.push(candidates.OPEN)
        generate(nLeft - 1, current + candidates.OPEN)
        parenthesisStack.pop()
        let isCloseValid = parenthesisStack.length > 0 && parenthesisStack[parenthesisStack.length - 1] === candidates.OPEN
        if (isCloseValid) {
            let lastElement = parenthesisStack.pop()
            generate(nLeft, current + candidates.CLOSE)
            parenthesisStack.push(lastElement)
        }
    }

    generate(n, "")
    return result

};


// Pattern Recognition
//1. Constraint Analysis -> n is not very big. Backtracking, Recursion, DP
// 2. Input Analysis -> n: number, Parenthesis SUGGESTS but does not CONFIRM a Stack
// 3. Output Analysis -> return combinatino -> Bactracking/recursion/DP