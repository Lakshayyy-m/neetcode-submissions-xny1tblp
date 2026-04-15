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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const result = this.DFS(root, subRoot);
        console.log(result)
        if (result === null || result === false) return false
        return true
    }
    subRootFound = false

    DFS(root, subRoot) {
        if (!root) return null;
        if (root.val === subRoot.val) {
            const result = this.isSameTree(root, subRoot)
            if(result) return true
        }
        const result1 = this.DFS(root.left, subRoot);
        if (result1 !== null && result1 !== false) return result1
        const result2 = this.DFS(root.right, subRoot);
        if (result2 !== null && result2 !== false) return result2
        return null;
    }

    isSameTree(root1, root2) {
        if (!root1 && !root2) return true;
        if ((!root1 || !root2) || (root1.val !== root2.val)) return false;
        if (!this.isSameTree(root1.left, root2.left) || !this.isSameTree(root1.right, root2.right)) return false
        return true
    }
}
