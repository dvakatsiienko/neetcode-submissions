class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    map = {};

    topKFrequent(nums, k) {
        nums.forEach((num) => {
            if (!Object.hasOwn(this.map, num)) this.map[num] = 0;


            this.map[num] = this.map[num] + 1
        })

        const result = []

        const n = Object.values(this.map).sort((a, b) => b - a).slice(0, k);

        Object.entries(this.map).forEach(entry => {
            if (n.includes(+entry[1])) result.push(+entry[0])

        })

        return result;
    }
}
