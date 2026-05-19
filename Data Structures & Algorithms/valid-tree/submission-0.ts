class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        const adjacencyList = {};
        for (let [node1, node2] of edges) {
            if (!adjacencyList[node1]) {
                adjacencyList[node1] = [];
            }
            if (!adjacencyList[node2]) {
                adjacencyList[node2] = [];
            }

            adjacencyList[node1].push(node2);
            // adjacencyList[node2].push(node1);
        }
        //graph formed above
        console.log(adjacencyList);
        const visited = new Set<string>();

        const dfs = (node: string, parent: string): boolean => {
            if (visited.has(node)) return false;
            visited.add(node);
            for (let neighbor of adjacencyList[node]) {
                return dfs(neighbor, node);
            }
            visited.delete(node);
            return true;
        };

        for (let node of Object.keys(adjacencyList)) {
            if (!dfs(node, null)) return false;
        }

        return true;
    }
}
