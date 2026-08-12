/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        let counter = 0;
        let maxCount = 0;
        const startTimes = intervals.map((x) => x.start).sort((a, b) => a - b);
        const endTimes = intervals.map((x) => x.end).sort((a, b) => a - b);

        let [startPointer, endPointer] = [0, 0];
        
        while (startPointer < startTimes.length) {
            if(startTimes[startPointer] < endTimes[endPointer]){
                counter++
                startPointer++
                maxCount = Math.max(counter, maxCount)
            } else {    
                counter--
                endPointer++
            }
        }
        return maxCount;
    }
}
