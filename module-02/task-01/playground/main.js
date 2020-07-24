// JS BASICS. EXERCISE 1. Crear una variable y almacenar mi nombre.
// JS BASICS. EXERCISE 2. Crear una variable y almacenar mi edad.

console.log(`starting javascript`);

var myName = `Melissa`;
var age = 24;

console.log(`Mi nombre es ${myName}`);
console.log(`Mi edad es ${age} años`);

//EXCERCISE 3. Crear una variable con la edad de Ignasi(32 años) y otra con la diferencia de edad entre NOSOTROS.

var ignasiAge = 32;
var ageDiff = age - ignasiAge;

console.log(`La direncia de edad entre Ignasi y yo es de ${ageDiff} años`);

//EXCERSICE 4.

var age = 24;

if (age > 21) {
	console.log(`You are not older than 21`)
} else {
	console.log(`You are older than 21`)
}

//EXCERSICE 5.Escribir un CONDICIONAL que compare mi edad con la de Ignasi.

if (ignasiAge < age) {
	console.log(`Ignasi is younger than you`)
} else if (ignasiAge > age) {
	console.log(`Ignasi is older than you`)
} else {
	console.log(`Ignasi y yo tenemos la misma edad`)
}

/*
si ignacio es mayor que yo entonces mostrar que es mayor que yo
si ignacio es menor que yo entronces mostrar que es menor que yo
si ignacio y yo somos de la misma edad, mostrar que somos de la misma edad

si edadIgnacio > miEdad entonces
	mostrar(Ignacio es mayor que yo)
si no si edadIgnacio < miEdad entonces
	mostrar(Ignacio es menor que yo)
si no entonces
	mostrar(Somos de la misma edad)
*/

//EJERCICIO 1.



//EJERCICIO 2.




//EJERCICIO 3. Crear una función que reciba un array como parámetro e imprima por consola el menor numero.

function menorNumero(array){
	var menor=array[0];
	for(var i=0; i< array.lenght; i++){
		if(array[i] < menor){
			menor=array[i]
		}
	}
	console.log(`El menor número del array es: ${menor}`)
}

menorNumero(startEdades)
menorNumero([12,-4,34,21])


//EJERCICIO 4. Crear una función que reciba un array como parametro e imprima por consola el mayor numero.

function mayorNumero(array) {
	var mayor= array[0;]
	for(var index= 0; index < array.length; index++) {
		if (array[index] > mayor) {
			mayor = array [index]
		}
	}
	console.log(`El mayor número del array es: ${mayor}`)
}
mayorNumero(startEdades)


//EJERCICIO 5. Crear una funcion que reciba un array y un indice como parametros e imprima por consola el valor que se encuentre en ese indice.

function buscarEnIndice(array,index){
	console.log(array[index])
}
console.log(startEdades)
buscarEnIndice(startEdades,1)


//EJERCICIO 6: Crear una funcion que reciba un array como parametro e imprima por consola los valores que se repiten.

function hayarRepetidos(array){
	var repetidos=[];
	var objetoAuxiliar={};
	for (var i=0; i < array.length; i++){
		if(!objetoAuxiliar[array[i]]) {
			objetoAuxiliar[array[i]]=0;
		}
		objetoAuxiliar[array[i]] += 1;
	}
	for (propiedad in objetoAuxiliar){
		if(objetoAuxiliar[propiedad] > 1){
			repetidos.push(propiedad)
		}
	}
}



/* Objetos: era una variable con muchos datos adentro.*/

//EJERCICIO 7. Crear una función que reciba un array como parametro y concatene todas las palabras en un solo string.

function arrayIntoString(myArray){
	return myArray.toString()
}

myColor = ["Red", "Green", "White", "black"];

console.log(arrayIntoString(myColor))

function arrayToString(array){
	var frase = "";
	for (var i=0 < array.length ; i++){
		frase += '"';
		frase += array[i];
		frase += '"';
		if( i< array.length -1){
			frase += ', ';
		}

	}
	return frase;
}
console.log(arrayToString(myColor))