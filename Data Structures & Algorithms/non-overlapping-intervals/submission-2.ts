class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        // sorting them first
        intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        const results: number[][] = [];
        let currentStart: number;
        let currentEnd: number = -Infinity;
        for (let i = 0; i < intervals.length; i++) {
            const [startTime, endTime] = intervals[i];

            if (currentEnd <= startTime) {
                currentStart = startTime;
                currentEnd = endTime;
                results.push([currentStart, currentEnd]);
            }
        }
    
        console.log(results);
        return intervals.length - results.length;
    }
}
