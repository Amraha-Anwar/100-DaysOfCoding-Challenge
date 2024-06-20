//Question 69
//Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder.
// Use an object to return both values.

function dividingAndRemainder( dividend: number, divisor: number): {
    quotient: number;
    remainder: number
    } {
        let quotient = Math.floor(dividend / divisor);
        let remainder = dividend % divisor;

     return {quotient, remainder}
}

console.log(dividingAndRemainder(10 , 3));
