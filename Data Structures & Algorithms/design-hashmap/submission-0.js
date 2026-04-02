class MyHashMap {
    constructor() {
        this.map = {};
    }

    hash (key) {
        const hashedKey = key % 1000;

        return hashedKey;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const hKey = this.hash(key);

        if (!Array.isArray(this.map[hKey])) this.map[hKey] = [];

        console.log(this.map[hKey])

        if (this.map[hKey].find(kv => kv[0] === key)) {
            this.map[hKey].forEach(kv => {
                if (kv[0] === key) {
                    kv[1] = value;
                }
            })

            return;
        } 

        this.map[hKey].push([key, value]);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.map[this.hash(key)]?.find(kv => kv[0] === key)?.[1] ?? -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hKey = this.hash(key);

        this.map[hKey] = this.map[hKey]?.filter(kv => kv?.[0] !== key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
