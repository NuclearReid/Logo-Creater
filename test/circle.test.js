const Questions = require('../lib/questions.js');
const Circle = require('../lib/circle.js');

describe('creating a Circle', () => {
    it('should return the code svg code for a circle', () =>{
        const questions = new Questions();
        let circleCode = 'circle cx="100" cy="100" r="100"';
        expect(Circle.render('circle')).toBe(circleCode);
    })
});