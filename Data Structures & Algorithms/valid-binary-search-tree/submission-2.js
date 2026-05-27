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
        this.DFS(root, null, "left")
        return this.globalFlag
    }

    DFS(root, parent, side) {
        if (!root) return root;
        if ((side === "left" && this.leftValidity(root, parent)) || (side === "right" && this.rightValidity(root, parent))) {
            this.DFS(root.left, root, "left")
            this.DFS(root.right, root, "right")
        } else {
            this.globalFlag = false
        }
    }

    leftValidity(root, parent) {
        let flag = true
        if (root.left) {
            if (root.val <= root.left.val) {
                flag = false
            }
        }
        if (root.right) {
            if (root.val >= root.right.val || (parent && root.right.val >= parent.val)) {
                flag = false
            }
        }
        return flag;
    }

    rightValidity(root, parent) {
        let flag = true
        if (root.left) {
            if (root.val <= root.left.val || root.left.val <= parent.val) {
                flag = false
            }
        }
        if (root.right) {
            if (root.val >= root.right.val || (parent && root.right.val >= parent.val)) {
                flag = false
            }
        }
        return flag;
    }

}
