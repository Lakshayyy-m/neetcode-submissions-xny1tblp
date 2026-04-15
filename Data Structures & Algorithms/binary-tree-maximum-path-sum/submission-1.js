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
        const currentMaxToReturn = max > 0 ? root.val + max : root.val
        const currentSum = root.val + (leftSum > 0 ? leftSum : 0) + (rightSum > 0 ? rightSum : 0);
        this.globalMax = Math.max(currentSum, this.globalMax);
        return currentMaxToReturn;
    }
}



