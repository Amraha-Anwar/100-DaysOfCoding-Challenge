//QUESTION 53:
/* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like 
coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.*/

let developerSkills = {
    languages : ["Typescript", "Python", "CSS", "HTML"],
    tools : ["Dreamweaver", "Github", "Webpack", "Eclipse"],
    frameworks: ["NextJS", "React", "Angular", "Laravel"]
};

let {languages, tools, frameworks} = developerSkills;
console.log(`Language ======> ${languages[0]}, \nFramework ======> ${frameworks[2]}, \nTool ======> ${tools[1]}`);

