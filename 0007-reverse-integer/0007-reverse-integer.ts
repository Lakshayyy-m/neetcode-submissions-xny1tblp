function reverse(x: number): number {

    let reversed = ""
    let remainingNumber = Math.abs(x)
    while (remainingNumber > 0) {
        reversed += remainingNumber % 10
        remainingNumber = Math.floor(remainingNumber / 10)
    }

    let reversedNumber = 0
    if (x < 0) {
        reversedNumber = + reversed * -1
    } else {
        reversedNumber = +reversed
    }
    if (reversedNumber < -(Math.pow(2, 31)) || reversedNumber > Math.pow(2, 31) - 1) return 0
    return reversedNumber
};

// Pattern Recognition -> 
// 1. Constraint -> 