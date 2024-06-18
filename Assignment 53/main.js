//QUESTION 53:
/* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like
coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.*/
var developerSkills = {
    languages: ["Typescript", "Python", "CSS", "HTML"],
    tools: ["Dreamweaver", "Github", "Webpack", "Eclipse"],
    frameworks: ["NextJS", "React", "Angular", "Laravel"]
};
var languages = developerSkills.languages, tools = developerSkills.tools, frameworks = developerSkills.frameworks;
console.log("Language ======> ".concat(languages[0], ", \nFramework ======> ").concat(frameworks[2], ", \nTool ======> ").concat(tools[1]));
