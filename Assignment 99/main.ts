//Question 99:
//Generate a date object representing your next birthday and log it to the console.

function nextBirthday(month: number, day: number): Date {
  let today = new Date();
  let year = today.getFullYear();
  const birthday = new Date(year, month - 1, day);
  if (birthday < today) {
    birthday.setFullYear(year + 1);
  }
  return birthday;
}
let myBirthday = nextBirthday(9, 23);
console.log("Next bithday on : ", myBirthday.toLocaleDateString());
