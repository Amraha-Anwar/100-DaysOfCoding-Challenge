//Question 93:
//Find the index of "Banana" in an array of fruits and replace it with "Mango".
function findAndReplace(fav_fruits) {
    var index = fav_fruits.indexOf("Banana");
    if (index !== -1)
        fav_fruits[index] = "Mango";
}
var fav_fruits = ["Orange", "PineApple", "Cherry", "Banana"];
findAndReplace(fav_fruits);
console.log(fav_fruits);
