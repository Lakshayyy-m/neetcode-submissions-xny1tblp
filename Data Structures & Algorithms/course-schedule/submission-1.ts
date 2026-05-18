class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjacencyList = {};
        for (let i = 0; i < numCourses; i++) {
            adjacencyList[i] = [];
        }
        let coursesToComplete = numCourses;
        const visited = new Set<string>();
        prerequisites.forEach(([course, preReq]) => {
            adjacencyList[course].push(preReq);
        });
        const dfs = (course: string): boolean => {
            if (visited.has(course)) return false;
            if (adjacencyList[course].length === 0) return true;
            visited.add(course);
            for (let preReq of adjacencyList[course]) {
                if (!dfs(preReq)) {
                    return false;
                }
            }

            // all the courses completable in this course
            adjacencyList[course].length = 0;
            visited.delete(course);
            return true;
        };

        Object.keys(adjacencyList).forEach((course) => {
            if (!dfs(course)) return;
            coursesToComplete--;
        });
        if (coursesToComplete < 1) return true;
        return false;
    }
}
