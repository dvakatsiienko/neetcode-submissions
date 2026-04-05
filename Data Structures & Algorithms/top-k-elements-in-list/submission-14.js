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

        const bucket = [];

        Object.entries(this.map).forEach(entry => {
            if (!bucket[entry[1]]) bucket[entry[1]] = [];

            bucket[entry[1]].push(+entry[0]);
        })

        const result = [];

        for (let i = bucket.length - 1; i >= 0; i--) {
            if (result.length >= k) break;

            const entry = bucket[i];

            if (entry?.length) result.push(...entry);
        }


        return result;
    }
}
