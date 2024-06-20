// Question 58
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function average_score() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, scores) { return sum + scores; }, 0);
    return total / scores.length;
}
console.log(average_score(75, 92, 87, 45, 60));
