const Ope = require('../Ope.js');
const math = require('mathjs');
const Matrix = require('../Matrix.js');

const ope = new Ope();


test('suma', () => {
    const m1 = new Matrix(3, true, true);
    const m2 = new Matrix(3, true, true);
    expect(ope.suma(m1.matrix, m2.matrix)).toStrictEqual(math.add(m1.matrix, m2.matrix));
})

test('resta', () => {
    const m1 = new Matrix(3, true, true);
    const m2 = new Matrix(3, true, true);
    expect(ope.resta(m1.matrix, m2.matrix)).toStrictEqual(math.subtract(m1.matrix, m2.matrix));
})

test('producto', () => {
    const m1 = new Matrix(3, true, true);
    const m2 = new Matrix(3, true, true);
    expect(ope.prod(m1.matrix, m2.matrix)).toStrictEqual(math.multiply(m1.matrix, m2.matrix));
})

test('determinante', () => {
    const m = new Matrix(4, true, true);
    
    expect(ope.getDeterminante(m.matrix)).toBe(math.det(m.matrix));
})

test('transpuesta', () => {
    const m = new Matrix(4, true, true);
    expect(ope.getTranspuesta(m.matrix)).toStrictEqual(math.transpose(m.matrix));
})

test('inversa', () => {
    const m = new Matrix(3, true, true);
    const inv1 = new Matrix(ope.getInversa(m.matrix)).roundedMatrix;
    const inv2 = new Matrix(math.inv(m.matrix)).roundedMatrix;
    expect(inv1).toStrictEqual(inv2);
})








