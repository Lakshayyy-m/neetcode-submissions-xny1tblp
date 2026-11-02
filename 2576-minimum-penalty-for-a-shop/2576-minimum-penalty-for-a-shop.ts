function bestClosingTime(customers: string): number {
    let cntN = 0
    let cntY = 0
    const closedPostFix = [0]
    const openPostFix = [0]
    for (let c of customers) {
        cntN += +(c === "N")
        openPostFix.push(cntN)
    }

    for (let c of customers.split("").reverse()) {
        cntY += +(c === "Y")
        closedPostFix.push(cntY)
    }

    closedPostFix.reverse()
    console.log(openPostFix, closedPostFix)
    const totalPenaltyGivenPointOfTime = []

    for (let i = 0; i < closedPostFix.length; i++) {
        totalPenaltyGivenPointOfTime.push(closedPostFix[i] + openPostFix[i])
    }

    const bestHour = totalPenaltyGivenPointOfTime.indexOf(Math.min(...totalPenaltyGivenPointOfTime))

    console.log(bestHour, totalPenaltyGivenPointOfTime)


    return bestHour
};


// Pattern recognition
// 1. Constraint => The whole string is very large -> two pointer, sliding window, DP, greedy
// 2. Input -> two pointer, sliding window
// 3. Output -> same as above