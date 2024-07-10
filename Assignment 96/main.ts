//Question 96:
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function sumOfNumbers(numbers: number[]): number {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(sumOfNumbers(numbers));
