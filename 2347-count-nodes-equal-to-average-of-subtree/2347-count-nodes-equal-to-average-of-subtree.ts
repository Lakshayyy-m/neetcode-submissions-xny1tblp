/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfSubtree(root: TreeNode | null): number {
    let result = 0

    const dfs = (node: TreeNode | null) => {
        let dict = { numOfNodes: 1, localSum: node.val }
        let leftSubtree
        let rightSubtree
        if (node.left) {
            let { numOfNodes, localSum } = dfs(node.left)
            dict.numOfNodes += numOfNodes
            dict.localSum += localSum
        }
        if (node.right) {
            let { numOfNodes, localSum } = dfs(node.right)
            dict.numOfNodes += numOfNodes
            dict.localSum += localSum
        }

        if (node.val === Math.floor(dict.localSum / dict.numOfNodes)) result++

        return dict
    }

    dfs(root)

    return result
};