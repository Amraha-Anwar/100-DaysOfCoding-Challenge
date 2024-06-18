// QUESTION 57
//Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [62, 71, 54, 89, 94, 65, 59];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }) / grades.length;
console.log(averageGrade);
