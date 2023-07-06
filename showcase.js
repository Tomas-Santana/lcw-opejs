const Ope = require('./Ope.js');
const math = require('mathjs');
const Matrix = require('./Matrix.js');


function showcase(
    getRoot=true,
    rootParam=2,
    getInt=true,
    intParam={fx: 'x**2', a: 0, b: 1},
    suma=true,
    sumParam={matrizA: new Matrix([[1,2],[3,4]], false, true), matrizB: new Matrix([[1,2],[3,4]], false, true)},
    resta=true,
    resParam={matrizA: new Matrix([[1,2],[3,4]], false, true), matrizB: new Matrix([[1,2],[3,4]], false, true)},
    prod=true,
    prodParam={matrizA: new Matrix([[1,2],[3,4]], false, true), matrizB: new Matrix([[1,2],[3,4]], false, true)},
    getTranspuesta=true,
    transParam={matriz: new Matrix([[1,2],[3,4]], false, true)},
    getInversa=true,
    invParam={matriz: new Matrix([[1,2],[3,4]], false, true)},

) 
{
    const ope = new Ope();

    if (getRoot) {
        console.log("==== Raiz cuadrada ====")
        console.log(`La raiz cuadrada de ${rootParam} es:`)
        console.log(ope.getRoot(rootParam));
        console.log("========================")
        console.log("\n")

    }
    if (getInt) {
        console.log("==== Integral ====")
        console.log(`La integral de ${intParam.fx} en el intervalo [${intParam.a}, ${intParam.b}] es:`)
        const {fx, a, b} = intParam;
        console.log(ope.getInt(fx, a, b));
        console.log("========================")
        console.log("\n")
    }

    if (suma) {
        console.log("==== Suma de matrices ====")
        const {matrizA, matrizB} = sumParam;
        console.log(`Matriz A:`)
        matrizA.print();
        console.log(`Matriz B:`)
        matrizB.print();
        console.log(`La suma de las matrices es:`)
        const suma = ope.suma(matrizA.matrix, matrizB.matrix);
        const matrizSuma = new Matrix(suma, false, true);
        matrizSuma.print();
        console.log("========================")
        console.log("\n")
    }

    if (resta) {
        console.log("==== Resta de matrices ====")
        const {matrizA, matrizB} = resParam;
        console.log(`Matriz A:`)
        matrizA.print();
        console.log(`Matriz B:`)
        matrizB.print();
        console.log(`La resta de las matrices es:`)
        const resta = ope.resta(matrizA.matrix, matrizB.matrix);
        const matrizResta = new Matrix(resta, false, true);
        matrizResta.print();
        console.log("========================")
        console.log("\n")
    }

    if (prod) {
        console.log("==== Producto de matrices ====")
        const {matrizA, matrizB} = prodParam;
        console.log(`Matriz A:`)
        matrizA.print();
        console.log(`Matriz B:`)
        matrizB.print();
        console.log(`El producto de las matrices es:`)
        const prod = ope.prod(matrizA.matrix, matrizB.matrix);
        const matrizProd = new Matrix(prod, false, true);
        matrizProd.print();
        console.log("========================")
        console.log("\n")
    }

    if (getTranspuesta) {
        console.log("==== Transpuesta ====")
        const {matriz} = transParam;
        console.log(`Matriz:`)
        matriz.print();
        const transpuesta = ope.getTranspuesta(matriz.matrix);
        const matrizTranspuesta = new Matrix(transpuesta, false, true);
        console.log(`La transpuesta de la matriz es:`)
        matrizTranspuesta.print();
        console.log("========================")
        console.log("\n")
    }

    if (getInversa) {
        console.log("==== Inversa ====")
        const {matriz} = invParam;
        console.log(`Matriz:`)
        matriz.print();
        console.log(`La inversa de la matriz es:`)
        const inversa = ope.getInversa(matriz.matrix);
        const matrizInversa = new Matrix(inversa, false, true);
        matrizInversa.print();
        console.log("========================")
        console.log("\n")
    }
}

const ROOTPARAM = 2;
const INTPARAM = {fx: 'x**2', a: 0, b: 1};
const MATA = new Matrix(
    [[1,2],[3,4]],
     false, true
    );
const MATB = new Matrix(
    [[1,2],[3,4]],
     false, true
    );
const MATC = new Matrix(
    [[1,2],[3,4]],
     false, true
    );
const MATCINV = new Matrix(
    [[-2,1],[1.5,-0.5]],
    false, false
    )



showcase(
    getRoot=false,
    rootParam=ROOTPARAM,
    getInt=false,
    intParam=INTPARAM,
    suma=false,
    sumParam={matrizA: MATA, matrizB: MATB},
    resta=false,
    resParam={matrizA: MATA, matrizB: MATB},
    prod=true,
    prodParam={matrizA: MATC, matrizB: MATCINV},
    getTranspuesta=false,
    transParam={matriz: MATC},
    getInversa=true,
    invParam={matriz: MATC},
)

