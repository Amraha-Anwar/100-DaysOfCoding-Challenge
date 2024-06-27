//Question 85:
// Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any
//given string and returns its position.

function specificWordPosition(specificWord: string): number {
  return specificWord.indexOf("code");
}

console.log(specificWordPosition("Let's code it!"));
