class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {
        let [lPointer, rPointer] = [0, matrix.length - 1];
        while (lPointer < rPointer) {
            let [tPointer, bPointer] = [0, matrix.length - 1];
            for (let i = 0; i < matrix.length - 1; i++) {
                // Save the first var in temp
                let temp: number = matrix[tPointer][lPointer + i];
                // Start swapping
                matrix[tPointer][lPointer + i] = matrix[bPointer - i][lPointer];

                matrix[bPointer - i][lPointer] = matrix[bPointer][rPointer - i];

                matrix[bPointer][rPointer - i] = matrix[tPointer + i][rPointer];

                matrix[tPointer + i][rPointer] = temp;
                console.log(i, matrix);
            }
            tPointer++;
            lPointer++;
            rPointer--;
            bPointer--;
        }
    }
}
