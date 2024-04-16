const inquirer = require('inquirer');
const Shapes = require('./lib/shapes.js');

// Defining questions to be used in Inquirer
const questions = [
    {
        type: 'input',
        message: 'What text would you like to appear inside the shape? (3 characters or less)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Please pick a color for that text',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Pick a shape for your text to appear within',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Please pick a color for the chosen shape',
        name: 'shapeColor',
    },

];

// Main logic - calls Inquirer and then passes the data to be used for SVG creation
const generateSVG = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            // Deconstructing the information in the response
            const { text, textColor, shape, shapeColor } = response;
            // Checks to make sure user has only input 3 or less characters
            if (text.length > 3) {
                console.log("\nPlease enter a character length that is EQUAL TO or LESS THAN 3\n");
                generateSVG();
            } else {
                // Switch to handle the chosen shape
                // Creates a new object with the proper class. Passes deconstructed data as arguments.
                switch (shape) {
                    case 'Circle':
                        const newCircle = new Shapes.Circle(shapeColor, text, textColor);
                        newCircle.render();
                        break;
                    case 'Triangle':
                        const newTriangle = new Shapes.Triangle(shapeColor, text, textColor);
                        newTriangle.render();
                        break;
                    case 'Square':
                        const newSquare = new Shapes.Square(shapeColor, text, textColor);
                        newSquare.render();
                        break;
                }
            }

        })
}

// Run program
generateSVG();