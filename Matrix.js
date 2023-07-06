class Matrix {
    constructor(matrix, random=false, isInts=false) {
        if (random) {
            this.matrix = this.randomMatrix(matrix,matrix,isInts);
            this.isInts = isInts;
        } else {
            this.matrix = matrix;
            this.isInts = isInts;
            
        }
        this.roundedMatrix = this.round();
    }
    randomMatrix(n, m, isInts = false) {
        const matriz = [];
        for (let i = 0; i < n; i++) {
            const fila = [];
            for (let j = 0; j < m; j++) {
                if (isInts) fila.push(Math.floor(Math.random() * 10));
                else fila.push(Math.random() * 10);
            }
            matriz.push(fila);
        }
        return matriz;
    }
    round(decimals = 4) {
        const matriz = [];
        for (let i = 0; i < this.matrix.length; i++) {
            const fila = [];
            for (let j = 0; j < this.matrix[0].length; j++) {
                fila.push(Math.round(this.matrix[i][j] * 100) / 100);
            }
            matriz.push(fila);
        }
        return matriz;
    }
    print() {
        if (this.isInts) {
            console.table(this.matrix);
        }
        else {
            console.table(this.matrix);
        }
    }
}
module.exports = Matrix;
