//Question 88:
//Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the
//nearest integer.

function roundingInteger(decimal: number): number {
  return Math.round(decimal);
}

console.log(roundingInteger(38.29)); //Output 38
console.log(roundingInteger(5.5)); // after roundoff .5 =1 will add in 5 to the Output will be 6
