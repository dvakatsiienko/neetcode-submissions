class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {boolean}
     */
    isAnagram(str1, str2) {
        const lenStr1 = str1.length;
        const lenStr2 = str2.length;

        if (lenStr1 !== lenStr2) return false;

        const map = {};

        for (const char of str1) {
            if (!(char in map)) map[char] = 0;

            map[char]++;
        }

        for (const char of str2) {
            if (!(char in map)) map[char] = 0;

            map[char]--;
        }

        const set = new Set(Object.values(map));

        if (set.size === 1 && set.has(0)) return true;

        return false;

    }
}
