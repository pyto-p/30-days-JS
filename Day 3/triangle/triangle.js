/**
 * INSTRUCTIONS: Write a script that prompt the user to enter 
 * base and height of the triangle and calculate an area 
 * of a triangle (area = 0.5 x b x h).
 */

let base = prompt('Enter the base of your triangle');
let height = prompt('Enter the height of your triangle');

let area = 0.5 * base * height;
alert(`The area of the triangle is ${area}`);