class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let low = 0; 
        let mid = 0;
        let high = nums.length - 1;

        while (mid <= high) {
            const num = nums[mid];

            if (num === 0) {
                const swappable = nums[low];
                nums[mid] = swappable;
                nums[low] = num;

                low++;
                mid++;
            }

            if (num === 1) {
                const swappable = nums[mid];
                nums[mid] = swappable;
                nums[mid] = num;

                mid++;
            }

            if (num === 2) {
                const swappable = nums[high];
                nums[mid] = swappable;
                nums[high] = num;

                high--;
            }
        }
    }
}
