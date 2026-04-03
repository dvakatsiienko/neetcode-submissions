class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        const merge = (arr, L, M, R) => {
            const leftArr = arr.slice(L, M+1);
            const rightArr = arr.slice(M+1, R+1);
            let i = L;
            let j = 0; // left arr pointer
            let k = 0; // right arr pointer

            while (j < leftArr.length && k < rightArr.length) {
                if (leftArr[j] <= rightArr[k]) {
                    arr[i] = leftArr[j];
                    j += 1;
                } else {
                    arr[i] = rightArr[k];
                    k += 1;
                }

                i += 1; // do every step
            }

            while (j < leftArr.length) {
                arr[i] = leftArr[j];
                j += 1;
                i += 1;
            }

            while (k < rightArr.length) {
                arr[i] = rightArr[k];
                k += 1;
                i += 1;
            }
        }

        const mergeSort = (arr, l, r) => {
            if (l === r) return arr;

            const m = Math.floor((l + r) / 2);
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);

            merge(arr, l, m, r);

            return arr;
        }

        return mergeSort(nums, 0, nums.length - 1);
    }
}
