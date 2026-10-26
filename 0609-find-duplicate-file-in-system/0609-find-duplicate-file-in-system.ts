function findDuplicate(paths: string[]): string[][] {
    let contentToPathMap = new Map<string, string[]>()

    for (let path of paths) {
        // Path will be space separated with first part as directory and the remaining as files
        const content = path.split(" ")
        const directory = content[0]
        for (let i = 1; i < content.length; i++) {
            let filePathAndContent = content[i]
            let file = filePathAndContent.split("(") // this moves the content to the last index except the very last ") character"
            let fileContent = file[file.length - 1] // don't even need to remove the last bracket
            let filePath = directory + "/" + file[0]
            let mapContent = contentToPathMap.get(fileContent)
            if (mapContent === undefined) {
                contentToPathMap.set(fileContent, [filePath])
            } else {
                mapContent.push(filePath)
            }
        }
    }
    let result = [...contentToPathMap.values()].filter(group => group.length > 1)
    return result

};


// Pattern Recognition
// 1. Constraint -> path array is quite big, two pointer, sliding window, DP, Greedy
// 2. Input -> array -> 