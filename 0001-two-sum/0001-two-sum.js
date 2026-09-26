/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const indexMap = {}
    for (let i = 0; i < nums.length; i++) {
        if (indexMap[nums[i]] === undefined) {
            indexMap[nums[i]] = [i]
        } else {
            indexMap[nums[i]].push(i)
        }
    }


    for (let j = 0; j < nums.length; j++) {
        let currentCandidate = nums[j]
        let indexOfCurrCandidate = indexMap[currentCandidate].pop()
        if (indexMap[target - currentCandidate] && indexMap[target - currentCandidate].length > 0) {
            // other candidate exists
            let indexOfOtherCandidate = indexMap[target - currentCandidate].pop()
            return [indexOfCurrCandidate, indexOfOtherCandidate]
        }
    }

};