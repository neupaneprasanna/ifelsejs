console.log("Write a C program to determine the quadrant of a point in the XY coordinate system.");

let a = parseFloat(prompt("Enter the x-coordinate"));
let b = parseFloat(prompt("Enter the y-coordinate"));
let position;

if (a > 0 && b > 0) {
    position = "1st Quadrant";
} else if (a < 0 && b > 0) {
    position = "2nd Quadrant";
} else if (a < 0 && b < 0) {
    position = "3rd Quadrant";
} else if (a > 0 && b < 0) {
    position = "4th Quadrant";
} else if (a === 0 && b !== 0) {
    position = "on the Y-axis";
} else if (a !== 0 && b === 0) {
    position = "on the X-axis";
} else {
    position = "at the origin";
}

alert("The given coordinates lie in " + position);
