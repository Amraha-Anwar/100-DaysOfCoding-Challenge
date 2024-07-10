//Question 95:
//Write a function that uses the .filter() method to return an array of numbers greater than 10.

function numbersGreaterThan10(nums: number[]) {
  return nums.filter((num) => num > 10);
}
let nums: number[] = [10, 16, 30, 7, 2, 0];
console.log(numbersGreaterThan10(nums));

//output [16,30]
