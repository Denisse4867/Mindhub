// JS BASICS. EXERCISE 1. Crear una variable y almacenar mi nombre.
// JS BASICS. EXERCISE 2. Crear una variable y almacenar mi edad.
/*
var nombre = `Melissa`; // variable, puede cambiar
var nombre2 = `Eibu`;
*/

/*
var nombre, nombre2;
nombre = `Melissa`;
nombre2 = `Eibu`;

const pi = `3,14`; // constante, una vez asignada NO se puede cambiar

console.log(nombre);
console.log(nombre2);
*/

var nombre, edad;
nombre = `Melissa Pamela Denisse Juarez`;
edad = 24;

console.log(`Mi nombre es ${nombre}`);
console.log(`Mi edad es ${edad} años`);


//EXCERCISE 3. Crear una variable con la edad de Ignasi(32 años) y otra con la diferencia de edad entre NOSOTROS.

var ignasiAge = 32;
var ageDiff = edad - ignasiAge;

console.log(`La diferencia de edad de Ignasi y yo es de ${ageDiff}`);

//EXCERSICE 4.Hacer un condicional que compare la variable de tu edad con el numero 21. Printear "you are older than 21" or "you are not older than 21" depende tu edad.

if (edad > 21) {
	console.log(`You are older than 21`);
} else {
	console.log(`You are not older than 21`);
}

//EXCERSICE 5.Escribir un CONDICIONAL que compare mi edad con la de Ignasi.

/*
Si yo tengo 24 años e Ignasi tiene 32 años, el es mas grande que yo
Si yo tengo 36 años e Ignasi tiene 32 años, el es mas chico que yo
Y si yo tengo 32 años y el tiene 32 años, los dos tenemos la misma edad
*/

if (edad < ignasiAge) {
	console.log(`Ignasi is older than you`);
} else if (edad > ignasiAge) {
	console.log(`Ignasi is younger than you`);
} else {
	console.log(`You have the same age as Ignasi`);
}
