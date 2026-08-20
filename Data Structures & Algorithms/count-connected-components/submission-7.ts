class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adjList = Array.from({ length: n }, () => []);
        const visited = new Array<boolean>(n).fill(false);
        for (let [edge1, edge2] of edges) {
            adjList[edge1].push(edge2);
            adjList[edge2].push(edge1);
        }

        const dfs = (node: number) => {
            if (!visited[node]) {
                visited[node] = true;
                for (let neighbor of adjList[node]) {
                    dfs(neighbor);
                }
            }
        };
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(i);
                count++;
            }
        }

        return count;
    }
}
