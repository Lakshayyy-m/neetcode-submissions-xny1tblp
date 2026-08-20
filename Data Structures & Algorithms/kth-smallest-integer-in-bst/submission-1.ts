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
    kthSmallest(root: TreeNode | null, k: number): number {
        // Inorder traversal to construct the sorted list of elements.
        const sortedNodes = [];
        const inorder = (node) => {
            if (!node) {
                return;
            }
            inorder(node.left);
            sortedNodes.push(node.val);
            inorder(node.right);
        };
        inorder(root);

        return sortedNodes[k - 1];
    }
}
