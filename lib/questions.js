const inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['circle', 'triangle', 'square'],
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
        let shapeSVG ='initial value';
        console.log(data.shape);
        console.log(data)
        if(data.shape === 'circle'){
            console.log('in the if statement');
            shapeSVG = `circle cx="50" cy="50" r="40"`;
        }
        console.log(`shapeSVG: ${shapeSVG}`);
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${shapeSVG} fill="${data.shapeColor}" /><text x="35" y="55" font-size="20px" fill="${data.textColor}">${data.logoText}</text></svg>`;
    })
    .then((svgString)=>{
        console.log(svgString);
    })
    }
};

Questions.prototype.inquirerQuestions();

module.exports = Questions;
