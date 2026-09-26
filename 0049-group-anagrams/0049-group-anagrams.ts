function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 0) return []
    const result: string[][] = [[strs[0]]]
    for (let j = 1; j < strs.length; j++) {
        for (let i = 0; i < result.length; i++) {
            console.log(i, strs[j], result.length)
            if (isAnagram(result[i][0], strs[j])) {
                result[i].push(strs[j])
                break;
            }
            if (i === result.length - 1) {
                result.push([strs[j]])
                break
            }
        }
    }

    return result
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