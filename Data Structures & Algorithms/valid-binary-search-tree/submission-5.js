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
     * @return {boolean} 
     */
    globalFlag = true
    isValidBST(root) {
        if (!root) return true;
        this.DFS(root, -Infinity, Infinity)
        return this.globalFlag
    }

    DFS(root, min, max) {
        if (!root || !this.globalFlag) return;
        if (root.val <= min || root.val >= max) {
            this.globalFlag = false;
            return;
        }
        this.DFS(root.left, min, root.val)
        this.DFS(root.right, root.val, max)
    }
}