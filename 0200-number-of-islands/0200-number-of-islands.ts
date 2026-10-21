function numIslands(grid: string[][]): number {
    let result = 0

    const traverse = (row, column) => {
        const sorroundingIslands = [
            [row + 1, column],
            [row - 1, column],
            [row, column + 1],
            [row, column - 1]
        ].filter(([row, column]) => (row >= 0 && column >= 0 && row < grid.length && column < grid[0].length && grid[row][column] !== "0"))

        for (let i = 0; i < sorroundingIslands.length; i++) {
            let [row, column] = sorroundingIslands[i]
            if (row >= 0 && column >= 0 && row < grid.length && column < grid[0].length && grid[row][column] !== "0") {
                grid[row][column] = "0"
                traverse(row, column)
            }
        }


    }

    for (let m = 0; m < grid.length; m++) {
        for (let n = 0; n < grid[0].length; n++) {
            if (grid[m][n] === "1") {
                result++
                traverse(m, n)
            }
        }
    }

    return result
};

// Pattern recognition
// 1. Constraint -> m and n are not that big so I can go with DFS, BFS, DP, Recursion.
// 2. Input Analysis -> Grid -> DFS, BFS, Recursion, DP