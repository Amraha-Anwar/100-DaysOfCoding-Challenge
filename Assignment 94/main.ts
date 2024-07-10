//Question 94:
//Use the .map() method to create a new array that contains the length of each word from an array of words.

//defining an array of words
let words: string[] = ["hardworking", "Passionate", "conquerer"];

//using .map() to create a new array contains the length of each word from the above array of words
let newArray: number[] = words.map((word) => word.length);
console.log(newArray);
//output [11,10,9]
