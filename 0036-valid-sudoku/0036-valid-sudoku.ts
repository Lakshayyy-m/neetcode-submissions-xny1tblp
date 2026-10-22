function isValidSudoku(board: string[][]): boolean {
    const columnMap: Record<number, Set<number>> = {}
    const rowMap: Record<number, Set<number>> = {}
    const subBoxMap: Record<number, Set<number>> = {}
    for (let num = 0; num < 9; num++) {
        columnMap[num] = new Set()
        rowMap[num] = new Set()
        subBoxMap[num] = new Set()
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === ".") continue
            const currentVal = +board[i][j]
            const subBoxNumber = getSubBoxNumber(i, j)
            // Check existence in column, row and subbox
            if (columnMap[j].has(currentVal) || rowMap[i].has(currentVal) || subBoxMap[subBoxNumber].has(currentVal)) {
                console.log(i, j, currentVal, board[i][j])
                return false
            }
            columnMap[j].add(currentVal)
            rowMap[i].add(currentVal)
            subBoxMap[subBoxNumber].add(currentVal)

        }
    }

    return true

};

function getSubBoxNumber(row: number, column: number) {
    if (row < 3) {
        if (column < 3) {
            return 0
        } else if (column < 6) {
            return 1
        } else {
            return 2
        }
    } else if (row < 6) {
        if (column < 3) {
            return 3
        } else if (column < 6) {
            return 4
        } else {
            return 5
        }

    } else {
        if (column < 3) {
            return 6
        } else if (column < 6) {
            return 7
        } else {
            return 8
        }

    }
}

// Pattern Recognition 
// 1. Constraint Analysis -> 