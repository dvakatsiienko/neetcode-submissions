class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const arr = new Array(nums.length * 2);

        nums.forEach((value, index) => {
            arr[index] = value;
            arr[nums.length + index] = value;
        });

        return arr;
    }
}
