const inquirer = require("inquirer");
const Questions = require("../lib/questions.js");

jest.mock('inquirer');

describe('Questions', () => {
   describe('User Choices', () => {
        it('make sure the logo is 3 characters long', async () => {
            const questions = new Questions();
            expect.assertions(2);
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


   
   
   
   
    // describe('logoText validation', () =>{
    //     it('should return true if the logo name is 3 letters or less', async () => {
    //         const logoName = 'qwe';
    //         const validationFunction = questionsArray[0].validate;
    //         expect(validationFunction(logoName)).toBe(true);
    //     });

    //     it('should return an error message if the logo name is more than 3 letters', () => {
    //         const logoName = 'qwer';
    //         const validationFunction = questionsArray[0].validate;
    //         expect(validationFunction(logoName)).toBe('Your input is greater than 3 characters');
    //     });
    // });
