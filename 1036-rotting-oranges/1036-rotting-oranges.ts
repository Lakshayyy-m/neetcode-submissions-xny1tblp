function orangesRotting(grid: number[][]): number {
    // Another approach, find all indices of 2
    // Stat a forloop as a minute tracker (or while loop). Each minute passes, go through the indices of 2s and flip the 4 directionally 1s and update the list of 2s
    let rottenIndices = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) rottenIndices.push([i, j])
        }
    }

    let minute = 0
    while (true) {
        let tempArray = []
        for (let i = 0; i < rottenIndices.length; i++) {
            const [row, column] = rottenIndices[i]
            // check surroundings
            const sides = [
                [row + 1, column],
                [row - 1, column],
                [row, column + 1],
                [row, column - 1],
            ].filter(([row, column]) => (row >= 0 && column >= 0 && row < grid.length && column < grid[0].length))

            for (let [row, column] of sides) {
                if (grid[row][column] === 1) {
                    tempArray.push([row, column])
                    grid[row][column] = 2
                }
            }
        }
        if (tempArray.length === 0) break
        minute++
        rottenIndices = tempArray
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) return -1
        }
    }
    return minute
};