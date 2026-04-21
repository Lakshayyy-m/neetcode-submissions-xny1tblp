class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let numOfIslands = 0;

        const DFS = (row, column) => {
            // whatever index we are at needs to be nulled
            grid[row][column] = null

            //look at the surrounding indexes, if 1, go deeper
            const indices = [[row, column + 1], [row + 1, column], [row - 1, column], [row, column - 1]]

            for (let index of indices) {
                const row = index[0], column = index[1]
                //when to not explore an index - out of bounds or when its already explored
                if (row >= grid.length || row < 0 || column >= grid[0].length || column < 0) {
                    continue
                }
                if (grid[row][column] === "1") {
                    DFS(row, column)
                }
            }
        };
        // loop through each and every element first
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "1") {
                    // do a DFS and null this as used
                    DFS(i, j);
                    // increment the counter only here since all the DFS tree would be one island
                    numOfIslands++

                }
            }
        }
        return numOfIslands;
    }
}
