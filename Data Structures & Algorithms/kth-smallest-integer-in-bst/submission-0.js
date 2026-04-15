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
     * @param {number} k
     * @return {number}
     */
    sortedTree = []
    kthSmallest(root, k) {
        this.inorderTraversal(root);
        return this.sortedTree[k - 1]
    }

    inorderTraversal(root) {
        if (!root) return null
        this.inorderTraversal(root.left)
        this.sortedTree.push(root.val)
        this.inorderTraversal(root.right)
    }
}
