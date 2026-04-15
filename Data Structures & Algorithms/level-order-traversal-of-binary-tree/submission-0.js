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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        const result = [];
        let level = [];
        level.push(root);
        while (level.length > 0) {
            result.push(level.map((x) => x.val));
            const currentSibs = [...level]
            level.length = 0;
            for (let i = 0; i < currentSibs.length; i++) {
                const currentNode = currentSibs[i];
                if (currentNode.left !== null) level.push(currentNode.left);
                if (currentNode.right !== null) level.push(currentNode.right);
            }
        }
        return result;
    }
}
