const Shape = require('../lib/shape.js');
const Square = require('../lib/square.js');


describe('Square', () =>{
    it('should retun the svg for a square', () =>{
        const logoText = 'mdn';
        const textColor = 'white';
        const shape = 'triangle';
        const shapeColor = 'blue';

        const square = new Square(logoText, textColor, shape, shapeColor);

        expect(square.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" fill="blue"/><text x="20%" y="50%" font-size="50px" fill="white">mdn</text></svg>`)
    });
});

