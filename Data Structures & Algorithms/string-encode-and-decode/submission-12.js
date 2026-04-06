class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => {
            return `${str.length}#${str}`;
        }).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(istr) {
        const strs = [];
        let i = 0;
        let len = '';

        console.log(istr)
        
        while (i < istr.length) {
            const sym = istr[i];

            if (typeof !isNaN((parseInt(sym) === 'number'))) {
                len = len + sym;
            }

            if (sym === '#') {
                const strLen = Number.parseInt(len);
                const dstr = istr.substr(i + 1, strLen);

                strs.push(dstr);
                i = i + strLen;
                len = ''
            }

            i++;
        }

        return strs;
    }
}
