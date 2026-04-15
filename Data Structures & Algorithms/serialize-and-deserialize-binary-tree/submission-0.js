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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        return JSON.stringify(this.DFS(root));
    }

    DFS(root) {
        if (!root) return null;
        const left = this.DFS(root.left);
        const right = this.DFS(root.right);
        return {
            val: root.val,
            left, right
        }
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const parsedData = JSON.parse(data);
        return this.reverseDFS(parsedData);
    }

    reverseDFS(dict) {
        if (!dict) return null
        return new TreeNode(dict.val, this.reverseDFS(dict.left), this.reverseDFS(dict.right))
    }
}
