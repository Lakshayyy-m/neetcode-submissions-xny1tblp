class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        const adjacencyList = {};
        for (let nodes of edges) {
            nodes.sort()
            if (!adjacencyList[nodes[0]]) {
                adjacencyList[nodes[0]] = [];
            }
            if (!adjacencyList[nodes[1]]) {
                adjacencyList[nodes[1]] = [];
            }

            adjacencyList[nodes[0]].push(nodes[1]);
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
