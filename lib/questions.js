const inquirer = require('inquirer');

const questionsArray = [
    {
        type: 'input',
        message: 'What is the text of your logo? (3 characters at most)',
        name: 'logoText',
        validate: function (input){
            if (input.length >3 || input.length <=0){
                return 'Your input is greater than 3 characters';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What do you want the text color to be?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Pick a shape',
        name: 'shape',
        choices: ['cirlce', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'What do you want the shape color to be?',
        name: 'shapeColor',
    },
]

class Questions {
    inquirerQuestions() {
    return inquirer.prompt(questionsArray)
    .then((data) =>{
        // console.log(data);
        return data;
    })
    }
};


module.exports = Questions;
