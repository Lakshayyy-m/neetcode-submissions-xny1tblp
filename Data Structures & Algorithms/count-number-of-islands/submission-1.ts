class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let result = 0;
        const traverse = (row, col, topLevel = false) => {
            if (
                col >= grid[0].length ||
                row >= grid.length ||
                col < 0 ||
                row < 0 ||
                grid[row][col] === "0"
            )
                return;
            console.log(row, col);
            grid[row][col] = "0";
            // check up, down, left and right
            traverse(row + 1, col);
            traverse(row - 1, col);
            traverse(row, col + 1);
            traverse(row, col - 1);

            if (topLevel) result++;
        };

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                traverse(i, j, true);
            }
        }

        return result;
    }
}
