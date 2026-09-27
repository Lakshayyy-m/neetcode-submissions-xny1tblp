function merge(intervals: number[][]): number[][] {
    // Sort intervals based on start time, if there is an overlap, return mergedf
    intervals.sort(([start1], [start2]) => start1 - start2)
    const result = []
    for (let i = 0; i <= intervals.length - 1; i++) {
        let j = i + 1
        // keep merging into current if I keep finding an overlap. Once no overlap found, push to result and move forwrd
        while (j < intervals.length && intervals[i][1] >= intervals[j][0]) {
            // Make overlapped end as new end for current interval and check next
            intervals[i][1] = Math.max(intervals[i][1], intervals[j][1])
            j++
        }
        result.push(intervals[i])
        i = j - 1
    }
    return result;
};