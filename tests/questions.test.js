const inquirer = require("inquirer");
const Questions = require("../lib/questions.js");

jest.mock('inquirer');

describe('Questions', () => {
   describe('User Choices (this test is just for jest practice)', () => {
        it('make sure the logo is 3 characters long', async () => {
            const questions = new Questions();
            let logoText = 'abc';
            let textColor = 'white';
            let shape = 'circle';
            let shapeColor = 'blue';
            
            inquirer.prompt = jest.fn().mockResolvedValue(
                {
                    logoText: logoText,
                    textColor: textColor,
                    shape: shape,
                    shapeColor: shapeColor,
                }
            );

            await questions.inquirerQuestions();

            expect(logoText.length <= 3).toBe(true);
        });
    });
});

