function minimumTime(n: number, relations: number[][], time: number[]): number {
    // I first need to form a graph/matrix denoting the relation
    let courseMap = new Map<number, number[]>()
    for (let i = 1; i <= n; i++) {
        courseMap.set(i, [])
    }

    for (let [prevCourse, course] of relations) {
        courseMap.set(course, [...courseMap.get(course), prevCourse])
    }

    let courseDurationMemo: Record<string, number> = {}
    let result = 0
    for (let i = 1; i <= n; i++) {
        result = Math.max(dfs(i), result)
    }

    function dfs(course: number) {
        if (courseDurationMemo[course] !== undefined) return courseDurationMemo[course]
        let preReqMax = -Infinity
        let edges = courseMap.get(course)
        if (edges.length === 0) return time[course - 1]
        for (let preReq of courseMap.get(course)) {
            let currentCourseDuration = dfs(preReq)
            if (currentCourseDuration > preReqMax) {
                preReqMax = currentCourseDuration
            }
        }
        return courseDurationMemo[course] = time[course - 1] + preReqMax
    }


    return result
};

// Pattern Recognition
// 1. Constraint -> n is pretty big so we can't do brute force or recursion. Need optimized. Need two pointer, sliding window, greedy, DP.
// 2. Input -> The input doesn't support two pointer or sliding window. Making combinations may be it. Yeah, DP. Minimum number. 