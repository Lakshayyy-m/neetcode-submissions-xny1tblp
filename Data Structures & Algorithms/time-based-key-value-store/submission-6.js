class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let valueToGet = this.keyStore.get(key) || []
        let result = ""


        let l = 0
        let r = valueToGet.length - 1

        while (l <= r) {
            let mid = Math.floor((l + r) / 2)

            if (valueToGet[mid][0] <= timestamp) {
                result = valueToGet[mid][1]
                l = mid + 1
            } else {
                r = mid - 1
            }
        }


        return result

    }
}
