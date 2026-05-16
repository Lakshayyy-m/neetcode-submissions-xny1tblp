class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const results: number[][] = [];
        const [pacific, atlantic] = [new Set<string>(), new Set<string>()];

        const dfs = (row: number, column: number, visited: Set<string>, previousHeight: number) => {
            if (
                visited.has(`${row},${column}`) ||
                row < 0 ||
                column < 0 ||
                row === heights.length ||
                column === heights[0].length ||
                heights[row][column] < previousHeight
            ) {
                return;
            }
            visited.add(`${row},${column}`);
            dfs(row + 1, column, visited, heights[row][column]);
            dfs(row, column + 1, visited, heights[row][column]);
            dfs(row - 1, column, visited, heights[row][column]);
            dfs(row, column - 1, visited, heights[row][column]);
        };

        for (let i = 0; i < heights.length; i++) {
            const row = i;
            //for vertical boundaries
            dfs(row, 0, pacific, heights[row][0]);
            dfs(row, heights[0].length - 1, atlantic, heights[row][heights[0].length - 1]);
        }

        for (let i = 0; i < heights[0].length; i++) {
            const column = i;

            // for horizontal boundary
            dfs(0, column, pacific, heights[0][column]);
            dfs(heights.length - 1, column, atlantic, heights[heights.length - 1][column]);
        }

        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (pacific.has(`${i},${j}`) && atlantic.has(`${i},${j}`)) {
                    results.push([i, j]);
                }
            }
        }

        return results;
    }
}
