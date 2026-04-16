class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        this.root = new TrieNode();
        for (let word of words) {
            this.addWords(word);
        }
        const result = new Set();

        const dfs = (row, column, currentNode = this.root) => {
            if (currentNode.isEndWord) result.add(currentNode.isEndWord);
            let letterIndex = board[row][column].charCodeAt(0) - "a".charCodeAt(0)
            if (currentNode.alphabets[letterIndex]) {
                console.log(currentNode.alphabets[letterIndex].value)
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
                    dfs(index[0], index[1], currentNode.alphabets[letterIndex])
                    // inserting the board value back since we have used it
                }
                board[row][column] = value;
            }
        };
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                dfs(i, j);
            }
        }

        return Array.from(result);
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

