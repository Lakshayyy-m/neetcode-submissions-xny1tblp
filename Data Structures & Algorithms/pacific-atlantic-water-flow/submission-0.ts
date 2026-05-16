class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
    const results: number[][] = [];

    function isTouchingBoth(row: number, column: number, visited: Set<string> = new Set()): { pacific: boolean, atlantic: boolean } {
        if (visited.has(`${row},${column}`)) return { pacific: false, atlantic: false };
        visited.add(`${row},${column}`);

        const possibleMoves = [
            [row + 1, column],
            [row, column + 1],
            [row - 1, column],
            [row, column - 1],
        ];

        const conditionMet = { pacific: false, atlantic: false };

        for (let i = 0; i < possibleMoves.length; i++) {
            const newRow = possibleMoves[i][0];
            const newColumn = possibleMoves[i][1];

            if (newRow < 0 || newColumn < 0) {
                conditionMet.pacific = true;
                continue;
            } else if (newRow > heights.length - 1 || newColumn > heights[0].length - 1) {
                conditionMet.atlantic = true;
                continue;
            }

            if (conditionMet.atlantic && conditionMet.pacific) return conditionMet;

            if (heights[newRow][newColumn] <= heights[row][column]) {
                const neighborResult = isTouchingBoth(newRow, newColumn, visited);
                conditionMet.pacific = conditionMet.pacific || neighborResult.pacific;
                conditionMet.atlantic = conditionMet.atlantic || neighborResult.atlantic;
            }
        }
        return conditionMet;
    }

    for (let k = 0; k < heights.length; k++) {
        for (let l = 0; l < heights[0].length; l++) {
            const { pacific, atlantic } = isTouchingBoth(k, l);
            if (pacific && atlantic) results.push([k, l]);
        }
    }

    return results;
}
}
