function minEatingSpeed(piles: number[], h: number): number {
    let maxValue = Math.max(...piles)
    let k = maxValue
    if (piles.length === h) {
        return k
    }
    let minK = k
    // Start binary search to find k
    let l = 1
    let r = k
    while (l <= r) {
        let mid = l + (Math.floor((r - l) / 2))
        if (checkValidK(mid, piles, h)) {
            // If k bananas is enough, try going lower, else try going higher
            minK = mid
            r = mid - 1
            if (mid === 47) {

                // console.log(checkValidK(46, piles, h))
                console.log(l, r, mid)
            }
        } else {
            l = mid + 1
        }
    }


    return minK
};

function checkValidK(k: number, piles: number[], hours: number) {
    let i = 0
    while (i < piles.length) {
        let hoursNeededForCurrentPile = Math.ceil(piles[i] / k)
        if (hours < hoursNeededForCurrentPile) {
            return false
        } else {
            hours -= hoursNeededForCurrentPile
            i++
        }
    }
    return true
}


// Pattern Recognition
// 1. High, input size. Likely DP, Two Pointer or some approach.
// 2. My k search space is basically 0-(max(piles)). I can try using binary search to find k that satisfies finishing up piles in h hours.
