# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        maxSum = float('-inf')

        def dfs(node):
            nonlocal maxSum
            if node is None:
                return 0

            leftSum = dfs(node.left)
            rightSum = dfs(node.right)

            sum = max(node.val, node.val + leftSum, node.val + rightSum)
            maxSum = max(maxSum, sum, leftSum + rightSum + node.val)
            return sum

        dfs(root)
        return int(maxSum)
