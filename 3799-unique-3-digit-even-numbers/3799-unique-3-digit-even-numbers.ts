function totalNumbers(digits: number[]): number {
    const deduplicate = new Set<string>()
    const visited = new Set<number>()
    const recurse = (index: number, numberFormed: string) => {
        if (numberFormed.length > 3) {
            return
        }

        if (numberFormed.length === 3) {
            if (+numberFormed % 2 !== 0 || numberFormed[0] === "0") return
            return deduplicate.add(numberFormed)
        }

        for (let i = 0; i < digits.length; i++) {
            if (visited.has(i)) continue
            visited.add(i)
            recurse(i, numberFormed + digits[i])
            visited.delete(i)
        }
    }


    recurse(0, "")

    console.log(deduplicate)

    return deduplicate.size
};