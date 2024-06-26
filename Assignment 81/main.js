//Question 81:
//Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function objectInFunction(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
objectInFunction({ Name: "Amraha", Age: 17, Qualification: "Intermediate", hobby: "Reading novels" });
