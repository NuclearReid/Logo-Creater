const Triangle = require('../lib/triangle.js');
const Questions = require('../lib/questions.js')

describe('Triangle', () =>{
    it('should take in traingle and give the svg code out)', () =>{
        const triangle = new Triangle();
        let triShape = 'triangle'
        expect(triangle.render(triShape)).toBe(`<polygon points="300,0 0,0 150,200" fill="${this.shapeColor}" />`);

    });
});