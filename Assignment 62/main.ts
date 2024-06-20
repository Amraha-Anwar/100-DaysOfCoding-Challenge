//Question 62
//Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking,
//and then fill in this blueprint with an example student.

// bluprint means interface
interface StudentsInfo {
    name: string;
    age: number;
    courses: string[]
}

let students: StudentsInfo ={
    name: "Amraha",
    age: 17,
    courses: ["Typescript" , "Nextjs" , "Python"]
}

console.log(students);
