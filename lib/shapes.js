const fs = require('fs');

// Defining the class for a circle
class Circle {
    constructor(color, text, textColor) {
        this.cx = '150';
        this.cy = '100';
        this.r = '80';
        this.fill = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        console.log(`Creating a ${this.fill} Circle with the text "${this.text}`);
        let toSVG = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx='${this.cx}' cy='${this.cy}' r='${this.r}' fill='${this.fill}' />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.text}</text>

</svg>
        `;
        fs.writeFile('newCircle.svg', toSVG, (err) =>
            err ? console.error(err) : console.log('SVG Created!'));
        return;
    }
}

// Defining the class for a triangle
class Triangle {
    constructor(color, text, textColor) {
        this.points = "150, 18 244, 182 56, 182";
        this.fill = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        console.log(`Creating a ${this.fill} Triangle with the text "${this.text}`);
        let toSVG = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points='${this.points}' fill='${this.fill}' />

  <text x="150" y="150" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.text}</text>

</svg>
        `;
        fs.writeFile('newTriangle.svg', toSVG, (err) =>
            err ? console.error(err) : console.log('SVG Created!'));
        return;
    }
}

// Defining the class for a Square
class Square {
    constructor(color, text, textColor) {
        this.width = '150';
        this.height = '150';
        this.x = '75';
        this.y = '25';
        this.fill = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        console.log(`Creating a ${this.fill} Square with the text "${this.text}"`);
        let toSVG = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width='${this.width}' height='${this.height}' x='${this.x}' y='${this.y}' fill='${this.fill}' />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.text}</text>

</svg>
        `;
        fs.writeFile('newSquare.svg', toSVG, (err) =>
            err ? console.error(err) : console.log('SVG Created!'));
        return;
    }
}

// Exporting the multiple classes for each shape
module.exports = {
    Circle,
    Triangle,
    Square
}
