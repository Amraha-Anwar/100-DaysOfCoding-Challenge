// QUESTION 57
//Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [62, 71, 54, 89, 94, 65, 59];

let averageGrade = grades.reduce((total, grade) => total + grade) / grades.length;
console.log(averageGrade);
