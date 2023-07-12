class Ope {
    constructor(){
        console.log("Operaciones cargadas 🏋️‍♂️")
    };
    /**
    * Retorna el valor absoluto de un numero.
    * @param  {int} x 
    * @return {int} el valor absoluto del numero 
    */
    #getAbs(x) {
        return x < 0 ? -x : x;
    }
    /**
     * Retorna la raiz cuadrada de un numero.
     * @param {int} x 
     * @return {int} la raiz cuadrada del numero. 
     */
    getRoot(x) {
        // validaciones
        if (typeof x !== 'number') {
            throw "Error: x debe ser un numero";
        }
        if (x < 0) {
            throw "Error: x debe ser positivo";
        }


        // raiz cuadrada por metodo de newton
        const e = 0.0001;
        let actual = x > 1 ? x : x+1; // si x<1, sqrt(x) > x
        let anterior = 0;

        while (this.#getAbs(actual - anterior)/actual > e) {
            anterior = actual;
            actual = (anterior + x/anterior) / 2; // formula de newton
        }

        return actual;
    }
    /**
     * Calcula la integral de la funcion fx en el intervalo [a, b] por el metodo de Simpson.
     * @param {function | string} fx la funcion a evaluar.
     * @param {int} a limite inferior.
     * @param {int} b limite superior.
     * @returns {int} el valor de la integral.
     */
    getInt(fx, a, b) {
        
        // validaciones
        let gx;
        if (typeof fx === 'function') {
            gx = fx;
        }
        else if (typeof fx === 'string') {
            gx = val => eval(fx.replaceAll("x", `(${val})`)); // necesita estar entre parentesis para evitar errores con numeros negativos
        }
        else {
            throw "Error: fx debe ser una funcion o un string";
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw "Error: a y b deben ser numeros";
        }
        if (a > b) {
            throw "Error: a debe ser menor que b";
        }

        // formula de Simpson
        const n = 10000; // el numero de rectangulos. Mas rectangulos, mas preciso.
        const h = (b - a) / n;
        let acumulador = 0;
        
        // Empieza la suma.
        // Segun la regla de simpson, se suman de forma diferente los pares, los impares y los limites (se multiplican por factores diferentes). 
        for (let i = 0; i <= n; i++) {
            const x = a + i*h;
            if (i === 0 || i === n) {
                acumulador += gx(x);   
            }
            else if (i % 2 === 0) {
                acumulador += 2 * gx(x);    
            }
            else {
                acumulador += 4 * gx(x);
            }
        }
        return acumulador * h / 3;

    }
    // operaciones con matrices
    /** 
     *  Calcula la suma de dos matrices.
     * @param {[[int]]} matrizA
     * @param {[[int]]} matrizB
     * @returns {[[int]]} la suma de las matrices.
     */
    suma(matrizA, matrizB) {
        // validaciones
        if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
            throw "Error: las matrices deben tener las mismas dimensiones";
        }
        // suma
        const matrizSuma = [];
        for (let i = 0; i < matrizA.length; i++) {
            const fila = [];
            for (let j = 0; j < matrizA[0].length; j++) {
                fila.push(matrizA[i][j] + matrizB[i][j]);
            }
            matrizSuma.push(fila);
        }
        return matrizSuma;
    }
    /**
     * Calcula la resta de dos matrices.
     * @param {[[int]]} matrizA
     * @param {[[int]]} matrizB
     * @returns {[[int]]} la resta de las matrices.
     */
    resta(matrizA, matrizB) {
        // validaciones
        if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
            throw "Error: las matrices deben tener las mismas dimensiones";
        }
        // resta
        const matrizResta = [];
        for (let i = 0; i < matrizA.length; i++) {
            const fila = [];
            for (let j = 0; j < matrizA[0].length; j++) {
                fila.push(matrizA[i][j] - matrizB[i][j]);
            }
            matrizResta.push(fila);
        }
        return matrizResta;
    }
    /**
     * Calcula el producto de dos matrices.
     * @param {[[int]]} matrizA
     * @param {[[int]]} matrizB
     * @returns {[[int]]} el producto de las matrices.
     */
    prod(matrizA, matrizB) {
        // validaciones
        if (matrizA[0].length !== matrizB.length) {
            throw "Error: el numero de columnas de la matriz A debe ser igual al numero de filas de la matriz B";
        }
        // multiplicacion
        const matrizProd = [];
        for (let i = 0; i < matrizA.length; i++) {
            const fila = [];
            for (let j = 0; j < matrizB[0].length; j++) {
                let acumulador = 0; // aqui se guarda el producto punto
                for (let k = 0; k < matrizA[0].length; k++) { 
                    // producto punto entre la fila i de A y la columna j de B. k es el indice de la suma
                    acumulador += matrizA[i][k] * matrizB[k][j]; 
                }
                fila.push(acumulador);
            }
            matrizProd.push(fila);
        }
        return matrizProd;
    }
    /**
     * Calcula el producto de una matriz por un escalar.
     * @param {[[int]]} matriz
     * @param {int} escalar
     * @returns {[[int]]} el producto de la matriz por el escalar.
     */
    prodEscalar(matriz, escalar) {
        // validaciones
        if (typeof escalar !== 'number') {
            throw "Error: el escalar debe ser un numero";
        }   
        // multiplicacion
        const matrizProdEscalar = [];
        for (let i = 0; i < matriz.length; i++) {
            const fila = [];
            for (let j = 0; j < matriz[0].length; j++) {
                fila.push(matriz[i][j] * escalar);
            }
            matrizProdEscalar.push(fila);
        }
        return matrizProdEscalar;
    }
    /**
     * Calcula la transpuesta de una matriz.
     * @param {[[int]]} matriz
     * @returns {[[int]]} la transpuesta de la matriz.
     */
    getTranspuesta(matriz) {

        let matrizTranspuesta = [];
        for (let i = 0; i < matriz[0].length; i++) {
            let fila = []; 
            // se llena la fila con los elementos de la columna i
            for (let j = 0; j < matriz.length; j++) { 
                fila.push(matriz[j][i]);              
            }
            matrizTranspuesta.push(fila);
        }
        return matrizTranspuesta;
    }
    /**
     * Calcula el cofactor de una matriz.
     * @param {[[int]]} matriz
     * @param {int} fila
     * @param {int} columna
     * @returns {[[int]]} el cofactor M(fila)(columna) de la matriz.
     */
    #getCofactor(matriz, fila, columna) {
        let cofactor = [];

        for (let i = 0; i < matriz.length; i++) {
            if (i !== fila) {
                let filaCofactor = [];                       
                for (let j = 0; j < matriz[0].length; j++) { 
                    if (j !== columna) {                 // Se revisa que no se este en fila o columna
                        filaCofactor.push(matriz[i][j]);
                    }
                }
                if (filaCofactor.length > 0){
                    cofactor.push(filaCofactor);
                }
            }
        }
        return cofactor;
    }
    /**
     * Calcula el determinante de una matriz.
     * @param {[[int]]} matriz
     * @returns {int} el determinante de la matriz.
     * @requires getCofactor()
     */
    #getDeterminante(matriz) {
        // validaciones
        if (matriz.length !== matriz[0].length) {
            throw "Error: la matriz debe ser cuadrada";
        }
        // caso base
        if (matriz.length === 1) {
            return matriz[0][0];    // caso base. Det 1x1
        }
        
        // caso recursivo
        let determinante = 0;
        for (let j=0; j<matriz.length; j++) {
            const cofactor = this.#getCofactor(matriz, 0, j);
            // se hace la recursion. Como el cofactor es de menor tamaño, cae en el caso base eventualemente                             
            determinante += matriz[0][j] * (-1)**(2+j) * this.#getDeterminante(cofactor); 
        }                                                                                
        return determinante;

    }
    /**
     * Calcula la matriz adjunta de una matriz.
     * @param {[[int]]} matriz
     * @returns {[[int]]} la matriz adjunta de la matriz.
     * @requires getCofactor()
     * @requires getDeterminante()
     */
    #getAdjunta(matriz) {
        // validaciones
        if (matriz.length !== matriz[0].length) {
            throw "Error: la matriz debe ser cuadrada";
        }
        // matriz de cofactores
        const matrizCofactores = [];
        for (let i = 0; i < matriz.length; i++) {
            const fila = [];
            for (let j = 0; j < matriz.length; j++) {
                const cofactor = this.#getCofactor(matriz, i, j);
                fila.push((-1)**(i+j+2) * this.#getDeterminante(cofactor));
            }
            matrizCofactores.push(fila);
        }
        // matriz adjunta
        const matrizAdjunta = this.getTranspuesta(matrizCofactores);
        return matrizAdjunta;
    }
    /**
     * Calcula la matriz inversa de una matriz.
     * @param {[[int]]} matriz
     * @returns {[[int]]} la matriz inversa de la matriz.
     * @returns {string} "La matriz no tiene inversa" si la matriz no tiene inversa.
     * @requires getDeterminante() 
     * @requires getAdjunta() 
     * @requires prodEscalar()
     */
    getInversa(matriz) {
        // validaciones
        if (matriz.length !== matriz[0].length) {
            throw "Error: la matriz debe ser cuadrada";
        }

        // formula: A^-1 = adj(A)/det(A) 
        const determinant = this.#getDeterminante(matriz);
        if (determinant === 0) return "La matriz no tiene inversa";
        const adjunta = this.#getAdjunta(matriz);

        const matrizInversa = this.prodEscalar(adjunta, 1/determinant);
        return matrizInversa; 
    }
}
module.exports = Ope;








