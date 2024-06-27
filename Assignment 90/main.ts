//Question 90:
//Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

function isValueNaN(value: any): boolean {
  return isNaN(value);
}

console.log(isValueNaN("Typescript"));
console.log(isValueNaN(2301));
