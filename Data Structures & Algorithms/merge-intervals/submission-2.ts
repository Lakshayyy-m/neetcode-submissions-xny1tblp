class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0]-b[0])
        const result = [];

        let currentStart: number = intervals[0][0];
        let currentEnd: number = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            let [startTime, endtime] = intervals[i];
            if (currentEnd >= startTime) {
                // Overlapping intervals - keep same start time, and take the next's end time
                currentStart = Math.min(currentStart, startTime)
                currentEnd = Math.max(currentEnd, endtime);
            } else {
                result.push([currentStart, currentEnd]);
                currentStart = startTime;
                currentEnd = endtime;
            }
        }

        result.push([currentStart, currentEnd]);

        return result;
    }
}
