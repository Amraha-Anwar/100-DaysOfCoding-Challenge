//Question 74:
//Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their
//values so that a becomes 10 and b becomes 5.
function swappinValues() {
    var a = 5, //assigning the values
    b = 10;
    console.log("Before swapping: a =", a, ", b =", b); // log before console
    var temp = a; // temporarily storing "a" into a box
    a = b; // now box "a" is empty, put the value of box "b" into "a"
    b = temp; // now box "b" is empty, put the value of temp(value of a) into "b"
    console.log("After swapping: a =", a, ", b =", b); //
}
swappinValues();
