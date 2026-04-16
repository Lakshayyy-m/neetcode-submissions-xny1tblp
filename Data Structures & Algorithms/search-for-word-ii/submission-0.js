class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        for (let word of words) {
            this.addWords(word);
        }

        const dfs = (row, column, currentNode = this.root) => {
            if (board[row][column] === currentNode.value) {
                let indices = [
                    [row + 1, column],
                    [row - 1, column],
                    [row, column + 1],
                    [row, column - 1],
                ];

                let value = board[row][column];
                board[row][column] = null;
                for (let index of indices) {
                    if (
                        index[0] < 0 ||
                        index[1] < 0 ||
                        index[0] >= board.length ||
                        index[1] >= board[0].length
                    ) {
                        //out of bounds index
                        continue;
                    }

                    if (!board[index[0]][index[1]]) {
                        // item null means its already used
                        continue;
                    }
                    //valid index
                    let letterAtCurrentIndex = board[index[0]][index[1]];
                    let indexOfCurrentLetterInCurrentNode =
                        letterAtCurrentIndex.charCodeAt(0) - "a".charCodeAt(0);
                    if (currentNode.alphabets[indexOfCurrentLetterInCurrentNode]) {
                        dfs(index[0], index[1], currentNode.alphabets[indexOf]);
                    }
                    // inserting the board value back since we have used it
                }
                board[row][column] = value;
            }
        };
    }

    addWords(word) {
        let curr = this.root;
        for (let c of word) {
            let index = c.charCodeAt(0) - "a".charCodeAt(0);
            curr = curr.alphabets[index] || (curr.alphabets[index] = new TrieNode(c));
        }
        curr.isEndWord = word;
    }
}

class TrieNode {
    constructor(value = null) {
        this.value = value;
        this.alphabets = new Array(26).fill(null);
        this.isEndWord = null;
    }
}
