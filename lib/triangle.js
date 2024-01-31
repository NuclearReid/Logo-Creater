const Shape = require('./questions.js');


class Triangle extends Shape{
   render(){
    return `<polygon points="300,0 0,0 150,200" fill="${this.shapeColor}" />`;
   }
}

module.exports = Triangle;