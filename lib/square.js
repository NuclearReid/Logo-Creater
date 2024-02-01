const Shape = require('./shape.js');

class Square extends Shape{
    constructor(logoText, textColor, shape, shapeColor){
        super(logoText, textColor, shape, shapeColor);
    }

    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" fill="${this.shapeColor}"/><text x="20%" y="50%" font-size="50px" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
}

module.exports = Square;
