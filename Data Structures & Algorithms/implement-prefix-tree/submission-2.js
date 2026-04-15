class PrefixTree {

    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        //got through the characters of the arg string and insert each letter and mark end of word at the end
        let curr = this.root
        for (let c of word) {
            let index = c.charCodeAt(0) - "a".charCodeAt(0)
            if (!curr.alphabets[index]) {
                curr.alphabets[index] = new TrieNode()
            }
            curr = curr.alphabets[index]
        }

        curr.isEndOfWord = true
        return
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        //go through each word and if at the end isEndOfWord is true, that means the word was actually inserted and is not a prefix
        let curr = this.root
        for (let c of word) {
            let index = c.charCodeAt(0) - "a".charCodeAt(0)
            if (!curr.alphabets[index]) {
                return false
            }
            curr = curr.alphabets[index]
        }

        return curr.isEndOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        // same thing as search just no need to check if it is the end of word since we are looking for a prefix
        let curr = this.root
        for (let c of prefix) {
            let index = c.charCodeAt(0) - "a".charCodeAt(0)
            if (!curr?.alphabets[index]) {
                return false
            }
            curr = curr.alphabets[index]
        }

        return true
    }
}

class TrieNode {
    constructor(value = null) {
        this.value = value
        this.alphabets = (new Array(26)).fill(null)
        this.isEndOfWord = false
    }
}
