// Question 59
//Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give
//them later.
function numberAdding(numToAdd) {
    return function (number) {
        return number + numToAdd;
    };
}
var adding = numberAdding(433);
console.log(adding(629));
