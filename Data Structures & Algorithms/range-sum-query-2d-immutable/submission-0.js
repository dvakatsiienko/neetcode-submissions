class NumMatrix {
    constructor(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;
        
        // Padded prefix matrix: (m+1) × (n+1), filled with zeros
        this.prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
        
        for (let r = 1; r <= m; r++) {
            for (let c = 1; c <= n; c++) {
                this.prefix[r][c] = matrix[r - 1][c - 1]
                                  + this.prefix[r - 1][c]
                                  + this.prefix[r][c - 1]
                                  - this.prefix[r - 1][c - 1];
            }
        }
    }

    sumRegion(row1, col1, row2, col2) {
        return this.prefix[row2 + 1][col2 + 1]
             - this.prefix[row1][col2 + 1]
             - this.prefix[row2 + 1][col1]
             + this.prefix[row1][col1];
    }
}