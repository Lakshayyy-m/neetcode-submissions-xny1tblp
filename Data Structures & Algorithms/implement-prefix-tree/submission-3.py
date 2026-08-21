class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEnd = False


class PrefixTree:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for index, char in enumerate(word):
            if char in node.children:
                # Char already exists
                node = node.children[char]
            else:
                # Char does not exist
                node.children[char] = TrieNode()
                node = node.children[char]
            if index == len(word) - 1:
                node.isEnd = True

    def search(self, word: str) -> bool:
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            else:
                node = node.children[char]
        return node.isEnd

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            else:
                node = node.children[char]
        return True
