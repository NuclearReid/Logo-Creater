const Shape = require('./shape.js');
// all these shapes work the same
// gets the paramaters for the shape (from shape.js), then puts them into the .svg string
class Circle extends Shape{
    constructor(logoText, textColor, shape, shapeColor){
        super(logoText, textColor, shape, shapeColor);
    }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="${this.shapeColor}"/><text x="15%" y="55%" font-size="50px" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
}

module.exports = Circle;
