class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        // sorting them first
        intervals.sort((a, b) => a[0] - b[0]);
        const results: number[][] = [];
        let currentStart: number = intervals[0][0];
        let currentEnd: number = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            const [startTime, endTime] = intervals[i];
            console.log(currentStart, currentEnd, startTime, endTime)
            if (currentEnd <= startTime) {
                results.push([currentStart, currentEnd]);
                currentStart = startTime;
                currentEnd = endTime;
            }
        }
        if(currentStart === intervals[intervals.length-1][0] && currentEnd === intervals[intervals.length-1][1]){
            results.push([currentStart, currentEnd])
        }
        console.log(results);
        return intervals.length - results.length;
    }
}
