//Question 89:
// Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it
//into an actual number type.

function convertingStringToNumber(str: string): number {
  return parseFloat(str);
}

console.log(convertingStringToNumber("48.23"));
console.log(convertingStringToNumber("23"));
