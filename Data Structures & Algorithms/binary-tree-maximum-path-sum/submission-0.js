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
     * @return {number}
     */

    globalMax = -Infinity

    maxPathSum(root) {
        this.DFS(root);
        return this.globalMax;
    }

    DFS(root) {
        if (!root) return 0;
        const leftSum = this.DFS(root.left);
        const rightSum = this.DFS(root.right);
        const max = Math.max(leftSum, rightSum);
        const currentMaxToReturn = root.val + max;
        this.globalMax = Math.max(root.val + leftSum + rightSum, this.globalMax);
        return currentMaxToReturn;
    }
}



