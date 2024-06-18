// QUESTION 56
//Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixedItems = ["London", 3457, "Russia", 6775, true, "Pakintan", false];
var onlyWords = mixedItems.filter(function (item) { return typeof item === "string"; });
console.log(onlyWords);
