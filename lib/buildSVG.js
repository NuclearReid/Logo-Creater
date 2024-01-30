const Questions = require('./questions.js');

const questions = new Questions();
let questionAnswers = {};

questions.inquirerQuestions()
    .then((data) => {
        questionAnswers = data;
        console.log(questionAnswers);
        return questionAnswers;
    });




