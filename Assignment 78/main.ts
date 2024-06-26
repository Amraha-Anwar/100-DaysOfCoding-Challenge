//Question 78:
//Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs
//the same task, such as squaring a number.

//function declaration
function functionDeclaration(a: number, b: number): number {
  return a * b;
}

const functionExpression = function (a: number, b: number): number {
  return a * b;
};

console.log(functionDeclaration(2, 2));
console.log(functionExpression(2, 2));
