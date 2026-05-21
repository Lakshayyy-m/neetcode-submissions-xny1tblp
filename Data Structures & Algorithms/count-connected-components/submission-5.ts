class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        //given number of nodes and list of edges
        // DFS should be done on each node, keeping tract of visited, only visit if not visited before, depicting a different graph
        // Everytime you traverse, just increase the count
        const adjacencyList = {};
        // adding all the nodes
        for (let i = 0; i < n; i++) {
            adjacencyList[i] = [];
        }
        //adding all the edges
        for (let [node1, node2] of edges) {
            adjacencyList[node1].push(node2);
            adjacencyList[node2].push(node1);
        }
        // graph is ready
        const visited = new Array(n).fill(0);
        let countOfComponents = 0;
        const dfs = (node: number) => {
            if (visited[node]) return;
            visited[node] = 1;
            for (let neighbor of adjacencyList[node]) {
                dfs(neighbor);
            }
        };

        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;
            countOfComponents++;
            dfs(i);
        }

        return countOfComponents;
    }
}
