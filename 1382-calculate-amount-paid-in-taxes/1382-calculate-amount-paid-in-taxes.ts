function calculateTax(brackets: number[][], income: number): number {

    let tax = 0
    for (let i = 0; i < brackets.length; i++) {
        let [upperLimit, percentage] = brackets[i]
        if (upperLimit > income) {
            // The income does not exceed this bracket, we will not go further
            let amountToBeTaxed = i === 0 ? income : income - brackets[i - 1][0]
            tax += amountToBeTaxed * percentage * 0.01
            break
        } else {
            let amountToBeTaxed = i === 0 ? upperLimit : brackets[i][0] - brackets[i - 1][0]
            tax += amountToBeTaxed * percentage * 0.01
        }
    }

    return tax
};

// Pattern Recognition
// 1. Constraints -> Arrays are pretty small. Room for brute force and pattern matching. 
// 2. Input => Brackets are sorted -> Binary Search, two pointer, sliding window
