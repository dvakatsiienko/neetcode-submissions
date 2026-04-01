class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const str of strs) {
            const mod = str.split('').sort().join();

            if (!(mod in map)) map[mod] = [];
            map[mod].push(str);
        }

        const result = Object.values(map);

        return result;
    }
}
