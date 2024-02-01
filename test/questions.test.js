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
                data: {
                    logoText: logoText,
                    textColor: textColor,
                    shape: shape,
                    shapeColor: shapeColor,
                }
            });

            await questions.inquirerQuestions();

            expect(questions.logoText.length <= 3).toBe(true);
        });
    });
});

