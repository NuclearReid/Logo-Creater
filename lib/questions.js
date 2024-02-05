const inquirer = require('inquirer');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');
const fs = require('fs');


// sets up my array of questions
const questionsArray = [
    {
        type: 'input',
        message: 'What is the text of your logo? (3 characters at most)',
        name: 'logoText',
        // ensures the logo is only 1-3 characters
        validate: function (input){
            if (input.length >3 || input.length <=0){
                return "Your logo isn't 1-3 characters";
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
        // gets the questions array and sends it through inquirer
    return inquirer.prompt(questionsArray)
    .then((data) =>{
        // if the user leaves any of the sections blank the .svg will tell them they left one blank
        for(let value of Object.values(data)){
            if(value === ''){
                return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="white" />
                <text x="10%" y="50%" font-size="20px" fill="">A color was left blank</text>
                </svg>`
            }
        }
        let shapeSVG;
        // checks the shape they chose
        if(data.shape === 'circle'){
            
            const circle = new Circle(data.logoText, data.textColor, data.shape, data.shapeColor);
            // look at circle.js to see render(). it's pretty basic
            shapeSVG = circle.render();
        }
        else if(data.shape === 'triangle'){
            const triangle = new Triangle(data.logoText, data.textColor, data.shape, data.shapeColor);
            shapeSVG = triangle.render();
        }
        else if(data.shape === 'square'){
            const square = new Square(data.logoText, data.textColor, data.shape, data.shapeColor);
            shapeSVG = square.render();
        }

        return shapeSVG;
    })
    .then((shapeSVG)=>{

        // creaates a file with the .svg string
        fs.writeFile('./generated-logo/logo.svg', shapeSVG, (err) =>{
            if(err) throw err;
            console.log('Generated logo.svg');
        });
    });
    }
};


module.exports = Questions;
