//Question 68
//Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two
//decimal places.

function multiplyingDecimals(decimal_1:number, decimal_2: number ):number {
    return Math.round((decimal_1 * decimal_2) * 100) / 100
}

console.log(multiplyingDecimals(23.7, 532.5));
