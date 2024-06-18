// QUESTION 56
//Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixedItems = ["London", 3457, "Russia", 6775, true, "Pakistan", false];

let onlyWords = mixedItems.filter(item => typeof item === "string");

console.log(onlyWords);
