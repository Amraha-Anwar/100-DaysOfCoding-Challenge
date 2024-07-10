//Question 95:
//Write a function that uses the .filter() method to return an array of numbers greater than 10.
function numbersGreaterThan10(nums) {
    return nums.filter(function (num) { return num > 10; });
}
var nums = [10, 16, 30, 7, 2, 0];
console.log(numbersGreaterThan10(nums));
