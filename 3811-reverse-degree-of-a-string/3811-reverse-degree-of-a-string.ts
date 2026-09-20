function reverseDegree(s: string): number {
    const charEnd = "z".charCodeAt(0) + 1
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        sum = sum + ((charEnd - s[i].charCodeAt(0)) * (i + 1))
    }

    return sum
};