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
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        if (intervals.length === 0) return true;
        let currentStart = intervals[0].start;
        let currentEnd = intervals[0].end;

        for (let i = 1; i < intervals.length; i++) {
            let interval = intervals[i];
            // determine if an interval is overlapping
            if (
                (interval.start > currentStart && interval.start < currentEnd) ||
                (interval.end > currentStart && interval.end < currentEnd) ||
                (interval.start > currentStart && interval.end < currentEnd) ||
                (interval.start < currentStart && interval.end > currentEnd) || 
                (interval.start === currentStart && interval.end === currentEnd) 
            ) {
                //if overlapping return false
                console.log(
                    interval.start,
                    interval.start < currentStart && interval.end > currentEnd,
                );
                return false;
            } else {
                // if not overlapping, update current lower and upper bound
                currentStart = Math.min(currentStart, interval.start);
                currentEnd = Math.max(currentEnd, interval.end);
            }
        }

        return true;
    }
}
