//Question 83
//Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function upperCase_lowerCase(parameter: string) {
  let upperCase = parameter.toUpperCase();
  let lowerCase = parameter.toLowerCase();
  console.log("Upper Case ==>", upperCase);
  console.log("Lower Case ==>", lowerCase);
}

upperCase_lowerCase("Amraha Anwar");
