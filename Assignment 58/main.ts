// Question 58
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.


function average_score(...scores: number[]): number {

    //The callback function adds each score to the accumulated sum.
    let total = scores.reduce((sum , scores) => sum + scores , 0) //'0' is the initial value for the sum.
    //it will sum all the scores and divide it by the length of the given scores
    return total/scores.length 
}

console.log(average_score(75 , 92 , 87, 45 , 60));
