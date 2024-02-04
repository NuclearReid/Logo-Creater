const Shape = require('./shape.js');


class Triangle extends Shape{
   constructor(logoText, textColor, shape, shapeColor){
      super(logoText, textColor, shape, shapeColor);
   }
      render() {
         return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="300,0 0,0 150,200" fill="${this.shapeColor}"/><text x="30%" y="40%" font-size="50px" fill="${this.textColor}">${this.logoText}</text></svg>`;
      }
   
}

module.exports = Triangle;

