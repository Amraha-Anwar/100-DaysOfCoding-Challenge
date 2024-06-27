//Question 93:
//Find the index of "Banana" in an array of fruits and replace it with "Mango".

function findAndReplace(fav_fruits: string[]): void {
  const index = fav_fruits.indexOf("Banana");
  if (index !== -1) fav_fruits[index] = "Mango";
}

let fav_fruits: string[] = ["Orange", "PineApple", "Cherry", "Banana"];
findAndReplace(fav_fruits);
console.log(fav_fruits);
