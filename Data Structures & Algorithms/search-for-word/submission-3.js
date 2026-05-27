class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let flag = false
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === word[0]) {
                    flag = this.backtrack(board, word.slice(1), i, j, null)
                    if (flag) return flag;
                }
            }
        }
        return flag
    }

    backtrack(board, word, row, column, prevCoord) {
        if (word.length === 0) return true
        let possibleMoves = [[row, column + 1], [row + 1, column], [row, column - 1], [row - 1, column]]
        for (let i = 0; i < possibleMoves.length; i++) {
            console.log(possibleMoves[i][1] < board[0].length)
            // if move within bounds
            if (possibleMoves[i][0] >= 0 && possibleMoves[i][1] >= 0 && possibleMoves[i][0] < board.length && possibleMoves[i][1] < board[0].length) {
                // if move not same as prev move
                if ((prevCoord === null) || (prevCoord !== null && (prevCoord[0] !== possibleMoves[i][0] || prevCoord[1] !== possibleMoves[i][1]))) {
                    if (word[0] === board[possibleMoves[i][0]][possibleMoves[i][1]]) {
                        return this.backtrack(board, word.slice(1), possibleMoves[i][0], possibleMoves[i][1], [row, column])
                    }
                }

            }
        }

        return false
    }
}
