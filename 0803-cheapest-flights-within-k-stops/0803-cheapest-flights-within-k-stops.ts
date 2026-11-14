function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const incoming = new Map<number, [number, number][]>();
    for (const [from, to, price] of flights) {
        if (!incoming.has(to)) incoming.set(to, []);
        incoming.get(to)!.push([from, price]);
    }

    const memo = Array.from({ length: n }, () => new Array(k + 2).fill(-1));

    const dfs = (placeToExplore: number, stopsMade: number) => {
        if (placeToExplore === src) return 0
        if (stopsMade > k) return Infinity
        if (memo[placeToExplore][stopsMade] !== -1) return memo[placeToExplore][stopsMade];
        let currentMinPrice = Infinity
        const edges = incoming.get(placeToExplore) ?? []

        for (let [place, price] of edges) {
            let result = dfs(place, stopsMade + 1)

            if (result !== Infinity) {
                currentMinPrice = Math.min(currentMinPrice, result + price)
            }
        }

        return memo[placeToExplore][stopsMade] = currentMinPrice;
    }
    let result = dfs(+dst, 0)
    if (result !== Infinity) {
        return result
    } else { return -1 }

};

// Pattern Recognition
// 1. Constraint Analysis -> n is about a 100 at max, this means, recursion and brute force is possible.
// 2. Input -> Cities seem like nodes, so maybe some graph traversal. BFS/DFS. No 2 pointer, no sliding window.
