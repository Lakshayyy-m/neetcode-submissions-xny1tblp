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
    LCA = null
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        this.DFS(root, p, q)
        console.log(this.LCA)
        return this.LCA;
    }
    DFS(root, p, q) {
        if (!root) return root;
            console.log(p)
            console.log(q)
            console.log(root.val)

        if (root.val > p.val && root.val > q.val) {
            return this.DFS(root.left, p, q)
        } else {
            this.LCA = root
            return root
        }
    }
}
