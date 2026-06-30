class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        // sorting them first
        intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        let results: number = 0;
        let currentEnd: number = -Infinity;
        for (let i = 0; i < intervals.length; i++) {
            const [startTime, endTime] = intervals[i];

            if (currentEnd > startTime) {
                currentEnd = Math.min(endTime, currentEnd);
                results++;
            } else {
                currentEnd = endTime;
            }
        }

        console.log(results);
        return results;
    }
}
