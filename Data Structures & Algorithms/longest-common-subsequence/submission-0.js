class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const grid = Array.from({ length: text1.length + 1 }, () =>
            new Array(text2.length + 1).fill(0),
        );
        for (let i = text1.length - 1; i > -1; i--) {
            for (let j = text2.length - 1; j > -1; j--) {
                // start matching the string char by char
                if(text1[i] === text2[j]){
                    grid[i][j] = grid[i+1][j+1] + 1
                } else {
                    grid[i][j] = Math.max(grid[i+1][j], grid[i][j+1])
                }
            }
        }

        console.log(grid)
        return grid[0][0]
    }
}
