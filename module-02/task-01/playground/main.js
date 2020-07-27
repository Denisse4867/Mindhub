console.log(`Starting javascript`);

// Excercise 1 & 2:

var myName = `Melissa`;
var age = 24;

console.log(`My name is ${myName}.`);
console.log(`My age is ${age} years old.`);

// Excercise 3:

var ignasiAge = 32;
var ageDiff = age - ignasiAge;

console.log(`The age difference between Ignasi and me are ${ageDiff} years.`);

// Excercise 4:

if (age > 21) {
	console.log(`You are not older than 21.`);
} else {
	console.log(`You are older than 21.`);
}

// Excercise 5:

if (ignasiAge < age) {
	console.log(`Ignasi is younger than you.`);
} else if (ignasiAge > age) {
	console.log(`Ignasi is older than you.`);
} else {
	console.log(`You have the same age as Ignasi`);
}