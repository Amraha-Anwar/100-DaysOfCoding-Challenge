//Question 92:
// Write a function to remove the last element from an array and return the removed element.
function removeLastElement(array) {
    //This function uses a generic type T, allowing it to operate on arrays of any type.
    return array.pop();
}
var fav_fruits = ["Orange", "Banana", "Mango", "PineApple"];
console.log(removeLastElement(fav_fruits));
console.log(fav_fruits);
