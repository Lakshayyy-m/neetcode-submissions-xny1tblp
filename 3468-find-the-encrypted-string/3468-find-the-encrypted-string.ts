function getEncryptedString(s: string, k: number): string {
    const result = []

    for (let i = 0; i < s.length; i++) {
        let offset = i + k
        if (offset > s.length - 1) offset = offset % s.length
        result.push(s[offset])
    }

    return result.join("")
};