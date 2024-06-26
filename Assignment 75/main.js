//Question 75:
//Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform
//a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
function compoundAssignmentOperators() {
    var x = 4;
    console.log("Initial x:", x);
    // Addition
    x += 3; //add 3 to x
    console.log("After addition:", x);
    // Subtraction
    x -= 2; // subtract 2 from x
    console.log("After subtraction:", x);
    //Multiplication
    x *= 5; // multiply 5 by x
    console.log("After multiplication:", x);
    //Division
    x /= 8; // divide 8 by x
    console.log("After division:", x);
}
compoundAssignmentOperators();
