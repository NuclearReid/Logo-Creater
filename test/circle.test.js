const Circle = require('../lib/circle.js');
const Shape = require('../lib/shape.js');


describe('Circle', () =>{
    it('should take in Circle and give the svg code out)', () =>{
        const logoText = 'mdn';
        const textColor = 'white';
        const shape = 'triangle';
        const shapeColor = 'blue';

        const circle = new Circle(logoText, textColor, shape, shapeColor);
        expect(circle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="blue"/><text x="25%" y="55%" font-size="50px" fill="white">mdn</text></svg>`);

    });
});