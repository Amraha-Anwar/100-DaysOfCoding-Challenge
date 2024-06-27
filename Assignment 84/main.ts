//Question 84:
// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with
//"TypeScript".

function replacing(sentence: string): string {
  return sentence.replace(/Javascript/g, "Typescript"); //used a regular expression with 'g' flag for global replacement
}

console.log(
  replacing(
    "I'm currently learning Javascript. Javascript is quite interesting programming language"
  )
);
