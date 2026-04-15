class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {

        let curr = this.root
        for (let c of word) {
            let index = c.charCodeAt(0) - "a".charCodeAt(0)
            curr = curr.alphabets[index] || (curr.alphabets[index] = new TrieNode())
        }

        curr.isEndOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(index, root) {
            if (!root) return false
            if (index === word.length) {
                return root.isEndOfWord
            }
            let curr = root

            for (let i = index; i < word.length; i++) {
                if (word[i] === ".") {
                    for (let child of curr.alphabets) {
                        if (dfs(i + 1, child)) {
                            return true
                        }
                    }

                    return false
                }
                let index = word[i].charCodeAt(0) - "a".charCodeAt(0)
                if (!curr.alphabets[index]) {
                    return false
                }
                curr = curr.alphabets[index]
            }
            return curr.isEndOfWord
        }

        return dfs(0, this.root)
    }

    searchWildCard(word, wildCardNode) {
        if (word === "") return true
        let index = word[0].charCodeAt(0) - "a".charCodeAt(0)
        for (let j = 0; j < 26; j++) {
            let curr = wildCardNode.alphabets[j]
            if (word[0] === ".") {
                let exists = this.searchWildCard(word.substring(1), curr)
            }
            if (!curr) continue
            if (curr.alphabets[index]) {
                console.log(word)
                return this.searchWildCard(word.substring(1), curr)
            }
        }
        return false

    }
}


class TrieNode {
    constructor(value = null) {
        this.value = value
        this.alphabets = (new Array(26)).fill(null)
        this.isEndOfWord = false
    }
}