class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let index = 0;
        let prefix = strs[index];


        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];

            while (prefix.length > 0) {
                if (str.startsWith(prefix)) {
                    break;
                } else {
                    prefix = prefix.slice(0, -1);
                }
            }
        }

        return prefix;
    }
}
