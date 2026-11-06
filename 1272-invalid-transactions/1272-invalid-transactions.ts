function invalidTransactions(transactions: string[]): string[] {
    // Create a map of transaction based on name
    // Go through the map, if any name is within 60 minutes and same but different city, then we have a problem

    const timeNameCityMap = {}

    for (let transactionDetails of transactions) {
        let [name, time, amount, city] = transactionDetails.split(",")
        if (timeNameCityMap[time] === undefined) {
            timeNameCityMap[time] = {
                [name]: [city]
            }
        } else {
            if (timeNameCityMap[time][name] === undefined) {
                timeNameCityMap[time][name] = [city]
            } else {
                timeNameCityMap[time][name].push(city)
            }
        }
    }

    const result = []
    for (let transactionDetails of transactions) {
        let [name, time, amount, city] = transactionDetails.split(",")
        if (+amount > 1000) {
            result.push(transactionDetails)
            continue;
        }

        for (let i = +time - 60; i < +time + 61; i++) {
            if (timeNameCityMap[i] === undefined) {
                continue
            }
            if (timeNameCityMap[i][name] === undefined) {
                continue
            }
            if (timeNameCityMap[i][name].some(existingCity => existingCity !== city)) {
                console.log(transactionDetails, timeNameCityMap[i][name].length > 1, timeNameCityMap[i][name][0] !== city)
                result.push(transactionDetails)
                break
            }
        }

    }

    return result
};

// Pattern Recognition
// 1. Constraint - transactions array is not too big so we can go brute force if need be.
// 2. Input - Given array, need to do a search. Nothing window related. Two pointers, DP, Greedy, sorting and then searching.
