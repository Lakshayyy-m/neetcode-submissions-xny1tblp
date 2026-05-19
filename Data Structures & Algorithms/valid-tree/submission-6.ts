class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) return false;
        if (n === 0 || n === 1) return true;
        const adjacencyList = {};
        for (let [node1, node2] of edges) {
            if (!adjacencyList[node1]) {
                adjacencyList[node1] = [];
            }
            if (!adjacencyList[node2]) {
                adjacencyList[node2] = [];
            }

            adjacencyList[node1].push(node2);
            adjacencyList[node2].push(node1);
        }
        //graph formed above
        console.log(adjacencyList);
        const visiting = new Set<number>();
        const visited = new Set<number>();
        

        const dfs = (node: number, parent: number | null): boolean => {
            if (visiting.has(node)) return false;
            visiting.add(node);
            visited.add(node)
            for (let neighbor of adjacencyList[node]) {
                if (neighbor === parent) continue;
                console.log(node, neighbor.toString(), parent, visiting);
                if (!dfs(neighbor, node)) return false;
            }
            visiting.delete(node);
            return true;
        };

        if (!dfs(0, null)) return false;

        if(visiting.size !== n) return false

        return true;
    }
}
