/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    maxDepthCount = 0
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        this.DFS(root);
        return this.maxDepthCount
    }

    DFS(root, depthCount = 0) {
        if (!root) return root;
        depthCount++;
        this.DFS(root.left, depthCount);
        this.DFS(root.right, depthCount);
        this.maxDepthCount = Math.max(this.maxDepthCount, depthCount);
        return root;
    }
}
