class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        let answer = [];

        for (let i = 0; i < nums.length; i++) {
            const item = nums[i];
            const complement = target - item;

            if (map.has(complement)) {
                answer = [map.get(complement), i]
                break;
            }

            map.set(item, i);
        }

        return answer;
    }
}
