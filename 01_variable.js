const uid = 1256;
let age = 20;
var name = "Dhruv"; // we dont use var keyword because of the scope problem
gender = "Male";
let school; // undefined

// uid = 1273;  we can't change const value
age = 19;
name = "Anshika";
gender = "female";

console.table([uid, age, name, gender, school]);

console.log(typeof gender); //String
