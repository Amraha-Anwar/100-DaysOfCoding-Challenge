//Question 97:
// Write a function that returns the current date in the format "DD-MM-YYYY".

function currentDate(): string {
  let now = new Date();
  let day = String(now.getDate()).padStart(2, "0");
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let year = now.getFullYear();
  return `${day}-${month}-${year}`;
}
console.log(currentDate());
