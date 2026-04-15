class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        
        let maxPile = Math.max(...piles)
        let l = 1
        let r = maxPile
        let k = maxPile

        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            let isValid = this.checkPotency(mid, piles, h)
            if (isValid) {
                k = mid
                //check the smaller speeds 
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return k
    }

    checkPotency(speed, piles, hours) {
        let hoursTaken = 0
        for (let pile of piles) {
            hoursTaken += Math.ceil(pile / speed)
        }

        return hoursTaken <= hours
    }
}