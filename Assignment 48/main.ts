/*
QUESTION 48:
Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator 
to combine these arrays into a single array sorted in ascending order, then log the result. */


let pricesSet1 = [1800, 1500, 2000];
let pricesSet2 = [1400, 1100, 3000];
 // this will combine the above two arrays into a new array
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);  
                                                // sort will set the elements of both arrays in ascending order
console.log(combinedPrices);
