class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        if (capacity <= 0) return;
        
        this.capacity = capacity;
        this.size = 0;
        
        const arr = new Array(capacity);
        this.arr = arr;
    }

    /**
     * @param {number} idx
     * @returns {number}
     */
    get(idx) {
        const result = this.arr[idx];

        return result;
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size + 1 > this.capacity) this.resize();

        this.arr[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.size === 0) return;

        const nextSize = this.size - 1;
        const el = this.arr[nextSize]

        this.size = nextSize;

        return el;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
        const nextArr = new Array(this.capacity);

        for (let i = 0; i < this.size; i++) {
            nextArr[i] = this.arr[i]
        }

        this.arr = nextArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
