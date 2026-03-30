class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const arr = new Array(nums.length * 2);

        let offsetIdx = nums.length;

        nums.forEach((value, index) => {
            arr[index] = value;
            arr[offsetIdx] = value;
            offsetIdx++;

        });

        return arr;
    }
}
