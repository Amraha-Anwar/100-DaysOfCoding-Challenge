//Question 92:
// Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(array: T[]): T | undefined {
  //This function uses a generic type T, allowing it to operate on arrays of any type.
  return array.pop();
}

const fav_fruits: string[] = ["Orange", "Banana", "Mango", "PineApple"];
console.log(removeLastElement(fav_fruits));
console.log(fav_fruits);
