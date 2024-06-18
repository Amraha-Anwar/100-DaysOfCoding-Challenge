/*
QUESTION 48:
Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator
to combine these arrays into a single array sorted in ascending order, then log the result. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var pricesSet1 = [1800, 1500, 2000];
var pricesSet2 = [1400, 1100, 3000];
// this will combine the above two arrays into a new array
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
// sort will set the elements of both arrays in ascending order
console.log(combinedPrices);
