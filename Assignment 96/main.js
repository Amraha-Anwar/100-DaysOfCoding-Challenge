//Question 96:
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function sumOfNumbers(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(sumOfNumbers(numbers));
