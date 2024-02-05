
// gets the info from the user and puts it in the shape object
class Shape{
    constructor(logoText, textColor, shape, shapeColor){
        this.logoText = logoText;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    // render is left blank cause it's just used to return a different string depending on the chosen shape
    render(){

    }
}

module.exports = Shape;