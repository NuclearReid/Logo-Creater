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
        let textPlace = 'placement initial value';
        console.log(data.shape);
        console.log(data)
        
        if(data.shape === 'circle'){
            console.log('in the if statement');
            shapeSVG = `circle cx="100" cy="100" r="100"`;
            textPlace = `x="20%" y="50%"`;
        }
        if(data.shape === 'triangle'){
            shapeSVG = `polygon points="300,0 0,0 150,200"`;
            textPlace = 'x="40%" y="40%"';
        }
        if(data.shape === 'square'){
            shapeSVG = `rect x="0" y="0" width="200" height="200"`
        }

            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <${shapeSVG} fill="${data.shapeColor}" />
                <text ${textPlace} font-size="50px" fill="${data.textColor}">${data.logoText}</text>
            </svg>`;
    })
    .then((svgString)=>{
        fs.writeFile('logo.svg', svgString, (err) =>{
            if(err) throw err;
            console.log('Logo has been created!');
        });
    });
    }
};

// Questions.prototype.inquirerQuestions();

module.exports = Questions;
