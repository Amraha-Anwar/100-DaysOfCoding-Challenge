// QUESTION 51:
/* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an
arrow function.*/

function areaOfRectangle (width: number, height: number): number{
    return width * height
}

let arrowFunction = (width: number, height: number): number => width * height;
console.log(arrowFunction(7,5));
