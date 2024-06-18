"use strict";
/*Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year,
use array destructuring to assign the first and second laptops to variables. Then, log these variables. */
let laptops = [
    { make: "Apple", model: "MacBook Air(M2)", year: 2022 },
    { make: "hp", model: "HP Pavilion Plus 16", year: 2023 },
    { make: "DELL", model: "X16 R2", year: 2024 }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
