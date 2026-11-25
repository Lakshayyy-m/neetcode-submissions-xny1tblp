function countBlackBlocks(m: number, n: number, coordinates: number[][]): number[] {
    const map: Record<string, number> = {}

    for (let [x, y] of coordinates) {
        // 4 cases, 3 corner cases and 1 common case
        if (x === m - 1 && y === n - 1) {
            map[`${x - 1},${y - 1}`] = (map[`${x - 1},${y - 1}`] || 0) + 1
        } // last cell
        else if (x === m - 1) {
            map[`${x - 1},${y}`] = (map[`${x - 1},${y}`] || 0) + 1
            map[`${x - 1},${y - 1}`] = (map[`${x - 1},${y - 1}`] || 0) + 1
        } // last column
        else if (y === n - 1) {
            map[`${x},${y - 1}`] = (map[`${x},${y - 1}`] || 0) + 1
            map[`${x - 1},${y - 1}`] = (map[`${x - 1},${y - 1}`] || 0) + 1
        }// last row
        else {
            map[`${x - 1},${y}`] = (map[`${x - 1},${y}`] || 0) + 1
            map[`${x},${y - 1}`] = (map[`${x},${y - 1}`] || 0) + 1
            map[`${x - 1},${y - 1}`] = (map[`${x - 1},${y - 1}`] || 0) + 1
            map[`${x},${y}`] = (map[`${x},${y}`] || 0) + 1
        } // every other middle cell
    }

    const result = Array.from({ length: 5 }, () => 0)
    let totalBlackBlocks = 0
    for (let [key, value] of Object.entries(map)) {
        const [x, y] = key.split(",")
        if (+x >= 0 && +y >= 0) {
            // cell is in bounds
            result[value]++
            totalBlackBlocks++
        }
    }
    result[0] = (m - 1) * (n - 1) - totalBlackBlocks



    return result
};

// Pattern Recognition
// 1. Constraint -> Very big grid, can't simply do recursion or brute force. Need DP, two pointers, window I doubt.
// 2. Input -> Grid and coordinates -> Suggests traversing the grid, DP would be best I think
