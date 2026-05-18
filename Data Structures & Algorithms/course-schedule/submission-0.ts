class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjacencyMatrix = {};
        //construct graph
        for (let [course, preReq] of prerequisites) {
            if (!adjacencyMatrix[course]) adjacencyMatrix[course] = [];
            adjacencyMatrix[course].push(preReq);
        }

        console.log(adjacencyMatrix)

        return true
    }
}
