//Question 97:
// Write a function that returns the current date in the format "DD-MM-YYYY".
function currentDate() {
    let now = new Date();
    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(currentDate());
console.log(`bvdjvbdj`);
export {};
// function getCurrentDateFormatted(): string {
//     const now = new Date();
//     const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
//     const month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
//     const year = now.getFullYear();
//     return `${day}-${month}-${year}`;
// }
// console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
