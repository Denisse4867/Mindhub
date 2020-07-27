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

/*
si (condicion) entonces
	declaracion
si no si (condicion) entonces
	declaracion
si no entonces
	declaracion
	**Si hay una sola declaracion es usar else**
*/

if (edad < ignasiAge) {
	console.log(`Ignasi is older than you`);
} else if (edad > ignasiAge) {
	console.log(`Ignasi is younger than you`);
} else {
	console.log(`You have the same age as Ignasi`);
}

//*################################################################################################

//Como saber si un numero es par o impar.
var num1;

num1 = 570;

if (num1 % 2 == 0) {
	console.log("Es par");
} else {
	console.log("Es impar");
}

//*################################################################################################

// Maneras diferentes de operar matematicamente. Con todos los operadores es lo mismo.
var num = 4;
console.log(num);

num = num + 2;
console.log(num);

num += 2;
console.log(num);

// Para incrementar o decrecer de 1 en 1

num++;
console.log(num);

num--;
console.log(num);

//*################################################################################################

//? Arrays: lista de datos ordenados. Indice comienza en 0. difieren de elementos.

var array = [34,7,4,26,51,20];
// Para llamar al array entero
console.log(array);
// Para llamar a un indice del array
console.log(array[2]);
// Para saber la longitud del array
console.log(array.length);
// Para llamar la ultima posicion del array
console.log(array[array.length-1]);
// Agregar datos al array
array[6] = 99;
console.log(array);

//*################################################################################################

//? Ciclos for(cuantas veces se repite un ciclo). var + la condicion + las veces que se repite.
//? For: siempre se necesita un caso base, una condicion a cumplir (caso fin) y una operacion que llegue a el caso fin
//! Atencion a los bucles infinitos =(
for (var i = 0; i < 5; i++) {
	// Muestra los distintos valores de "i"
	console.log(`Bucle numero ${i}`);
} //Tambien puede darse con strings. ej: console.log("hola" + i);

for (var i = 0; i < array.length; i++) {
	console.log(`For: Indice del array ${i}, valor ${array[i]}`);
}

//con datos de strings

var alumnas = ["andre", "cata", "vicky", "rey"]

//* Que elegancia la de francia c:
for (var i = 0; i < alumnas.length; i++) {
	console.log(`Hola ${alumnas[i]}!`)
}

// Haciendo lo mismo pero concatenando ( lo poco eficiente que queda)

var alumnas = ["andre", "cata", "vicky", "rey"]

for (var i = 0; i < alumnas.length; i++) {
	console.log("Hola " + alumnas[i] + "!")
}

// Con condicional para llegar a datos menores a 50
for (var i = 0; i < array.length && array[i] < 50; i++) {
	console.log(`For (buen ejemplo): Indice del array ${i}, valor ${array[i]}`);
}

// Con condicional if para llegar a datos menores a 50 (MAL codigo)

for (var i = 0; i < array.length; i++) {
	if (array[i] < 50) {
		console.log(`For (mal ejemplo): Indice del array ${i}, valor ${array[i]}`)
	} else {
		break
	}
}

//*################################################################################################

//? Ciclo while: el codigo dentro del ciclo while corre mientras una condicion se cumpla
//? "while" en ingles es "mientras"

var j = 0;

while (array[j] < 50) {
	console.log(`While: Indice del array ${j}, valor ${array[j]}`);
	j++;
} //! Atención: siempre hay que poner a la variable un final como en la última linea.

//*################################################################################################

//?. OBJETOS: fisico o abstracto que se representa mediante propiedades. Por ejemplo, alumnos, que tengan su descripcion: alumnos = objeto, (propiedades dentro donde diga su descripción).  O autos... auto: objeto; componentes y modelos, marcas son sus propiedades!

var familia = [
	{
		edad: 24,
		primerNombre: `Melissa`,
		segundoNombre: `Pamela`,
		tercerNombre: `Denisse`,
		apellido: `Juarez`,
		puntajePersonalidad: {
			caracteristica1: 7,
			caracteristica2: `enojona`,
			caracteristica3: `soñadora`
		},
		coloresFavoritos:
		[
			`rojo`,
			`violeta`
		]
	},
	{
		edad: 69,
		primerNombre: `Estela`,
		segundoNombre: `Irene`,
		tercerNombre: null,
		apellido: `Suplicio`,
		puntajePersonalidad: {
			caracteristica1: 6,
			caracteristica2: null,
			caracteristica3: null
		},
		coloresFavoritos:
		[
			`naranja`,
			`celeste`
		]
	},
	{
		edad: 79,
		primerNombre: `Carlos`,
		segundoNombre: `Antonio`,
		tercerNombre: null,
		apellido: `Juarez`,
		puntajePersonalidad: {
			caracteristica1: 8,
			caracteristica2: `ermitaño`,
			caracteristica3: null
		},
		coloresFavoritos:
		[
			`negro`,
			`gris`
		]
	} /*si es el ultimo objeto no se agrega la 'coma'. solo si se continua*/
]

//! sintaxis del print: objeto[i].propiedad u objeto1.propiedad u objeto2... y así sucesivamente**

console.log('Caso 1');
for (var i = 0; i < familia.length; i++) {
	if (familia[i].segundoNombre == null){
		console.log(`${familia[i].primerNombre} ${familia[i].apellido}`);
	} else if (familia[i].tercerNombre == null) {
		console.log(`${familia[i].primerNombre} ${familia[i].segundoNombre} ${familia[i].apellido}`);
	} else {
		console.log(`${familia[i].primerNombre} ${familia[i].segundoNombre} ${familia[i].tercerNombre} ${familia[i].apellido}`);
	}
}

//o la siguiente manera con un operador logico

console.log('Caso 2');
for (var i = 0; i < familia.length; i++) {
	console.log(`${familia[i].primerNombre} ${familia[i].segundoNombre || ""} ${familia[i].tercerNombre || ""} ${familia[i].apellido || ""}`);
}

//! operador logico || (or) "", para indicar que si no existe nada no mostrarlo.

//*################################################################################################

//? FUNCIONES!

function printFullNames(arrayGeneral){
	console.log('Funcion llamada')
	for (var i = 0; i < arrayGeneral.length; i++) {
		console.log(`${arrayGeneral[i].primerNombre} ${arrayGeneral[i].segundoNombre || ""} ${arrayGeneral[i].tercerNombre || ""} ${arrayGeneral[i].apellido || ""}`);
	}
}

printFullNames(familia);

function multiplicarPorDos(n) {
	console.log('Funcion de multiplicacion llamada.');
	console.log(n * 2);
}

multiplicarPorDos(99);

function suma(n1, n2){
	return n1 + n2;
}

var suma1 = suma(782, 4721);
var suma2 = suma(48, 59);
var suma3 = suma(4856,1245);

