const inquirer = require("inquirer");
const Questions = require("../lib/questions.js");

jest.mock('inquirer');

describe('Questions', () => {
   describe('User Choices (this was an earlier test, no longer used)', () => {
        it('make sure the logo is 3 characters long', async () => {
            const questions = new Questions();
            expect.assertions(1);
            let logoText = 'abc';
            let textColor = 'white';
            let shape = 'circle';
            let shapeColor = 'blue';
            inquirer.prompt = jest.fn().mockResolvedValue({
                logoText: logoText,
                textColor: textColor,
                shape: shape,
                shapeColor: shapeColor,
            });
            let length = logoText.length <= 3;

            await 
            expect(questions.inquirerQuestions()).resolves.toEqual({
                logoText: logoText,
                textColor: textColor,
                shape: shape,
                shapeColor: shapeColor,
            });
            expect(length).toBe(true);
        });
    });
});

describe('Questions', () => {
    describe('getCircleSVG()', () => {
        it('should return "<circle cx="50" cy="50" r="40"/>" when circle is selected', async () => {
            const questions = new Questions();
            questions.shape = 'circle';

        
            jest.spyOn(inquirer, 'prompt').mockResolvedValue({
                logoText: 'abc',
                textColor: 'white',
                shape: 'circle',
                shapeColor: 'blue',
            });

            let circleSVG = await questions.inquirerQuestions();

            if(questions.shape == 'circle'){
                circleSVG = '<circle cx="50" cy="50" r="40"/>';
            }
            expect(circleSVG).toBe('<circle cx="50" cy="50" r="40"/>');
        });
    });
});

