//Question 72:
//Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const.
//Show how variables declared inside the block are not accessible outside of it.

{
  let blockLet = "Declared inside the block";
  let blockConst = "it is also declared inside the block";
  console.log(blockLet);
  console.log(blockConst);
}
//  LET and CONST both will not be accessible outside of the block
try {
  console.log(blockLet);
} catch (error) {
  console.log("'blocklet' is not accessible outside the block.");
}

try {
  console.log(blockConst);
} catch (error) {
  console.log("'blockconst' is also not accessible outside the block.");
}
