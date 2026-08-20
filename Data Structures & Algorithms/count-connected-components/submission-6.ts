class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        // Build a set with the vertex you have already seen, loop through the edges, if any of the edges already exist in the set, don't increase the count
        let count = 0;
        const seenSet = new Set<number>();
        for (let [edge1, edge2] of edges) {
            if (!seenSet.has(edge1) && !seenSet.has(edge2)) {
                count++;
            }
            seenSet.add(edge1);
            seenSet.add(edge2);
        }
        return count;
    }
}
