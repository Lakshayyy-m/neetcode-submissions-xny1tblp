/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const nodeToReturn = new Node(node.val);
        const visited = new Array(101).fill(0);
        visited[node.val] = nodeToReturn;
        const dfs = (node, nodeCopy) => {
            // if (visited[node.val]) return;
            for (let neighbor of node.neighbors) {
                if (visited[neighbor.val]) {
                    //has already been visited, just need to added to the neighbor list and not traversed
                    nodeCopy.neighbors.push(visited[neighbor.val]);
                } else {
                    // neighbor not visited, need to be traversed and created first
                    const newNode = new Node(neighbor.val);
                    nodeCopy.neighbors.push(newNode);
                    visited[neighbor.val] = newNode;
                    dfs(neighbor, newNode);
                }
            }
        };
        dfs(node, nodeToReturn);

        return nodeToReturn;
    }
}
