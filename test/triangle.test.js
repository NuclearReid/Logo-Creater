const Triangle = require('../lib/triangle.js');
const Shape = require('../lib/shape.js');

describe('Triangle', () =>{
    it('should take in traingle and give the svg code out)', () =>{
        const logoText = 'mdn';
        const textColor = 'white';
        const shape = 'triangle';
        const shapeColor = 'blue';
        const triangle = new Triangle(logoText, textColor, shape, shapeColor);
       
        expect(triangle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="300,0 0,0 150,200" fill="blue"/><text x="40%" y="40%" font-size="50px" fill="white">mdn</text></svg>`);

    });
});