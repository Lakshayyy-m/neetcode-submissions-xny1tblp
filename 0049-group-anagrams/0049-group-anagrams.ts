function groupAnagrams(strs: string[]): string[][] {
    const anagramMap = new Map()
    for (let str of strs) {
        let sortedStr = str.split("").sort().join("")
        if (anagramMap.has(sortedStr)) {
            anagramMap.get(sortedStr).push(str)
        } else {
            anagramMap.set(sortedStr, [str])
        }
    }

    return Array.from(anagramMap.values())

};

function isAnagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false

    const letters = new Array<number>(26).fill(0)

    for (let i = 0; i < str1.length; i++) {
        letters["z".charCodeAt(0) - str1.charCodeAt(i)]++
        letters["z".charCodeAt(0) - str2.charCodeAt(i)]--
    }

    for (let num of letters) {
        if (num !== 0) {
            return false
        }
    }

    return true
}