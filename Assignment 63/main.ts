//Question 63
//Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including 
//properties unique to each shape.

type shapes = {
    kind: "circle" | "rectangle";
    radius?: number;
    height?: number;
    width?: number
};

let circle: shapes ={
    kind: "circle",
    radius: 8
};

let rectangle: shapes ={
    kind: "rectangle",
    height: 23,
    width: 18
};

console.log(circle);
console.log(rectangle);

