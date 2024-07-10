//Question 98:
// Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function daysUntilNewYear(): number {
  let today = new Date();
  let newYear = new Date(today.getFullYear() + 1, 0, 1);
  let difference = newYear.getTime() - today.getTime();
  let days = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return days;
}
console.log(daysUntilNewYear() + " Days until new year.");
