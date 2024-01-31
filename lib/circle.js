const Questions = require('./questions.js');
const svgHTML = require('./svg.html');
const questions = new Questions();

let questionAnswers = {};



class Build{
    buildCircle(){
        var svgns = "http://www.w3.org/2000/svg";
        var svgContainer = document.getElementById("svgContainer");
        var circle = document.createElementNS(svgns, "circle");
            circle.setAttributeNS(null, "cx", 50);
            circle.setAttributeNS(null, "cy", 50);
            circle.setAttributeNS(null, "r", 40);
            circle.setAttributeNS(null, "fill", questionAnswers.shapeColor);
            svgContainer.appendChild(circle);
    }
}

questions.inquirerQuestions()
    .then((data) => {
        questionAnswers = data;
        console.log(questionAnswers);
        if(questionAnswers.shape == 'circle'){
            const build = new Build();
            build.buildCircle();
        }

    });
module.exports = Build;


// look more into this stuff


// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const Questions = require('./questions.js');
// const svgHTML = require('./svg.html');
// const questions = new Questions();

// class Build{
//     buildCircle(){
//         const dom = new JSDOM(`<!DOCTYPE html><body><svg id="svgContainer"></svg></body>`);
//         var svgns = "http://www.w3.org/2000/svg";
//         var svgContainer = dom.window.document.getElementById("svgContainer");
//         var circle = dom.window.document.createElementNS(svgns, "circle");
//         circle.setAttributeNS(null, "cx", 50);
//         circle.setAttributeNS(null, "cy", 50);
//         circle.setAttributeNS(null, "r", 40);
//         circle.setAttributeNS(null, "fill", questionAnswers.shapeColor);
//         svgContainer.appendChild(circle);
//         console.log(dom.serialize());
//     }
// }

// questions.inquirerQuestions()
//     .then((data) => {
//         questionAnswers = data;
//         console.log(questionAnswers);
//         if(questionAnswers.shape == 'circle'){
//             const build = new Build();
//             build.buildCircle();
//         }
//     });