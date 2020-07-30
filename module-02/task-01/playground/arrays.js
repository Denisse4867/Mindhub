console.log (`starting javascript`);

// Excercises 1:Arrays:
// A:Create an array whit all the names of our class.
var startNombres = [ `Katherine`, `Janneth`, `Nicole`, `Reyna`, `Melissa`, `Carolina`, `Macarena`, `Gabriela`, `Aylen`,
					`Florencia`, `Luana`, `Malena`, `Yennyfer`,  `Verónica`,  `Micaela`,  `Azucena`,  `Belén`,  `Nadine`,
					`Jhoelda`,  `Luz`, `Luz`,  `Florencia`,  `Catalina`,  `Florencia`,  `Belén`,  `Yael`, `Rocío`, `Magalí`,
					`Camila`, `Andrea`, `Victoria`, `Carla`, `Rodrigo`, `Branko` ];
					console.log(` Unsorted Array ${startNombres}`);

//B: sort the array alphabetically.

startNombres.sort();
console.log(`Sorted Array ${startNombres}`);

//C: Print the first element of the array in the console.

console.log(`first index ${startNombres[0]}`);

//D: Print the last element of the array in the console.

console.log(`last index ${startNombres[startNombres.length - 1]}`);

//E: Use a "for" loop.

for (var i = 0; i < startNombres.length; i++) {
	console.log(startNombres[i]);
}


// Excercises 2:

// Create an array with all the ages of the students in your class.
// Iterate the array using a while loop.
// Then print every age in the console.


var startEdades = [32, 49, 26, 20, 20, 18, 19, 24, 22, 23, 24, 21, 21, 21, 22, 20, 24, 25, 22, 19, 20, 23, 23, 23, 24, 21, 22, 23, 20, 21, 24, 20, 19];
var i = 0
while(i < startEdades.length){
	if (startEdades[i] % 2 == 0) {
		console.log(startEdades[i])
	}
	i++
}

// Iterate the array using a for loop.

for(var i = 0; i < startEdades.length; i++){
	if(startEdades[i] % 2 == 0){
		console.log(startEdades[i])
	}
}

// Excercise 3:

// Write a function which receives an array as a parameter and prints the biggest number in the array to the console:

function minorNumber(array){
	var menor = array[0];
	for(var i=0; i< array.length; i++){
		if(array[i] < menor){
			menor = array[i]
		}
	}
	console.log(`The minor number of the array is: ${menor}`);
}
minorNumber(startEdades)    //! se pone el array aca para definir esos parametros genericos de 'array'.
minorNumber([14,18,-7,74])  //? Por que si es lineal la lectura se definio esto despues y aun asi se tomo?
//! Porque el bloque de codigo de las funciones primero se carga, NO SE EJECUTA, al menos que se llame la funcion (como en este caso se llamo el (minorNumber) y de ahi adapto el parametro de la variable dentro del array)

// Excercise 4:

function maxNumber(array){
	var mayor = array[0];
	for(var i=0; i < array.length; i++){
		if(array[i] > mayor){
			mayor = array[i]
		}
	}
	console.log(`The max number of the array is: ${mayor}`);
}
maxNumber(startEdades);
maxNumber([14,18,-7,74]);


// Excercise 5:  Write a function which receives two parameters, an array and an index.

function searchInIndex(array,index){
	console.log(array[index])
}
console.log(startEdades)
searchInIndex(startEdades, 1)

// Excercise 6: Write a function which receives an array and only prints the values that repeat.

function findRepeated (array){
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



// Excercise 7: Write a simple JavaScript function to join all elements of the following array into a string.

function arrayIntoString(myArray){
	return myArray.toString()
}

myColor = ["Red", "Green", "White", "black"];

console.log(arrayIntoString(myColor))

function arrayToString(array){
	var frase = "";
	for (var i = 0; i < array.length ; i++){
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
