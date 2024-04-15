const Shapes = require("./shapes.js");

// Running tests for creating each type of object based on example user input
describe('Shapes', () => {
    describe('Circle', () => {
        it('Should make a color circle with text inside', () => {
            const testCircle = new Shapes.Circle("blue", "abc", "white");
            expect(testCircle.fill).toEqual("blue");
            expect(testCircle.text).toEqual("abc");
            expect(testCircle.textColor).toEqual("white");
        })
    })

    describe('Triangle', () => {
        it('Should make a color triangle with text inside', () => {
            const testTriangle = new Shapes.Triangle("red", "abc", "black");
            expect(testTriangle.fill).toEqual("red");
            expect(testTriangle.text).toEqual("abc");
            expect(testTriangle.textColor).toEqual("black");
        })
    })

    describe('Square', () => {
        it('Should make a color square with text inside', () => {
            const testSquare = new Shapes.Square("#34eb83", "abc", "#192421");
            expect(testSquare.fill).toEqual("#34eb83");
            expect(testSquare.text).toEqual("abc");
            expect(testSquare.textColor).toEqual("#192421");
        })
    })
});