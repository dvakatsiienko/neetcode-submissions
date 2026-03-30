class LinkedList {
    head = null;
    tail = null;

    constructor() {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (this.head === null) return -1;

        let currItem = this.head;
        let currIdx = 0;

        while (currItem !== null && currIdx <= index) {
            if (currIdx === index) {
                return currItem.value;
            }

            currItem = currItem.next;
            currIdx++;
        }

        return -1;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    insertHead(value) {
        const nextHeadItem = new LinkedListItem(value)

        // initial insert case
        if (this.head === null) {
            this.head = nextHeadItem;
            this.tail = nextHeadItem;

            return;
        }

        // subsequent insert cases
        const currHead = this.head;

        nextHeadItem.next = currHead;
        this.head = nextHeadItem;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(value) {
        const nextTailItem = new LinkedListItem(value)

        // initial insert case
        if (this.head === null) {
            this.head = nextTailItem;
            this.tail = nextTailItem;

            return;
        }

        // subsequent insert cases
        this.tail.next = nextTailItem;
        this.tail = nextTailItem;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (this.head === null || index < 0) return false;

        let currIndex = 0;
        let prevItem = this.head;
        let currItem = this.head;
        let nextItem = this.head?.next ?? null;

        if (index === 0) {
            if (this.head.next === null) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }


            return true;
        }

        while (currIndex <= index && currItem !== null) {
            if (currIndex === index) {
                if (currItem === this.tail) {
                    this.tail = prevItem;
                    this.tail.next = null;
                }

                prevItem.next = nextItem;

                return true;
            }

            prevItem = currItem;
            currItem = currItem?.next;
            nextItem = currItem?.next ?? null;
            currIndex++;
        }


        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        if (this.head === null) return [];

        const valueList = [];

        let currItem = this.head;

        while (currItem !== null) {
            valueList.push(currItem.value);
            currItem = currItem.next;
        }

        return valueList;
    }
}

class LinkedListItem {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
