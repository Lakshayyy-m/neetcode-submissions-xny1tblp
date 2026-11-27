function alertNames(keyName: string[], keyTime: string[]): string[] {
    const namewiseTime = {
    }
    const result = new Set<string>()
    for (let i = 0; i < keyName.length; i++) {
        if (namewiseTime[keyName[i]]) {
            namewiseTime[keyName[i]].push(keyTime[i])
        } else {
            namewiseTime[keyName[i]] = [keyTime[i]]
        }
    }
    for (let key of Object.keys(namewiseTime)) {
        namewiseTime[key].sort()
        let l = 0
        let r = 1
        if (result.has(key)) continue
        while (r < namewiseTime[key].length && r - l + 1 <= 3) {
            console.log(key, namewiseTime[key])
            const currentTime = namewiseTime[key][r].split(":")
            const startTime = namewiseTime[key][l].split(":")
            const withinHour = +currentTime[0] - +startTime[0] === 0 || +currentTime[0] - +startTime[0] === 1 && +currentTime[1] - +startTime[1] <= 0

            console.log(startTime + " and " + currentTime, withinHour, "\n")

            if (withinHour) {
                // current time is within start hour of time window
                r++
            } else {
                l++
                r = l + 1
            }
        }

        if (r - l + 1 === 4) result.add(key)
    }




    return [...result].sort()
};


// Pattern Recognition
// 1. Constraint -> keyName and keyTime are very big that I can't do brute force. I need a sliding window/two pointer/DP
// 2. Input -> Arrays-> Same as above.
// 3. Output -> Array, I doubt DP.