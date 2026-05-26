class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        const result = [];
        // Construct the adjacency list based on order of occuring
        const adjacencyList = {};
        for (let word of words) {
            for (let char of word) {
                adjacencyList[char] = new Set();
            }
        }

        // construct the relations based on order of occuring
        for (let i = 0; i < words.length - 1; i++) {
            const [word1, word2] = [words[i], words[i + 1]];
            const minLength = Math.min(word1.length, word2.length);
            if (
                word1.substring(0, minLength) === word2.substring(0, minLength) &&
                word1.length > word2.length
            ) {
                return "";
            }
            for (let j = 0; j < minLength; j++) {
                if (word1[j] !== word2[j]) {
                    adjacencyList[word1[j]].add(word2[j]);
                    break;
                }
            }
        }

        const visited = {}; // char = false -> visited sometime. char = true -> visiting now, that is in current path

        const dfs = (char: string): boolean => {
            console.log(visited[char])
            if (char in visited) {
                return visited[char];
            }

            visited[char] = true;

            for (let neighbor of Array.from(adjacencyList[char])) {
                if (dfs(neighbor as string)) {
                    return true;
                }
            }

            visited[char] = false;
            result.push(char);
        };

        for (let char of Object.keys(adjacencyList)) {
            if (dfs(char)) {
                return ""; // means there is a cycle
            }
        }

        
        return result.reverse().join("");
    }
}
