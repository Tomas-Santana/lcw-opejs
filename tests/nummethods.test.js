const Ope = require('../Ope.js');
const math = require('mathjs');


const ope = new Ope();

test("root", () => {
    expect(
        Math.round(ope.getRoot(Math.random*10)*1000000) / 1000000
    ).toBe(
        Math.round(Math.sqrt(Math.random*10)*1000000) / 1000000
    )
})


