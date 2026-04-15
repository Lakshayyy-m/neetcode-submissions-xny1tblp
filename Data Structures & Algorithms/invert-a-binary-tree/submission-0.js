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
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        return this.DFS(root);
    }


    DFS(root) {
        if (!root) return root;
        this.DFS(root.left);
        this.DFS(root.right);
        [root.left, root.right] = [root.right, root.left];
        return root;
    }
}
