console.log (`starting javascript`);

// Excercise 1:  Write a JavaScript function that reverses a number.

function reverseString(input){
	var reverse = [];
	var array = input.split("")
	for( var i = array.lenght; i>= 0 ; i--){
		reverse.push(array[i])
	}
	return reverse.join("");
}
console.log(reverseString("ESCRIBIR")) //? funcion se puede poner con los simbolos y el backstick?
console.log(reverseString())


/* puede ser en reversa como: for(var i - array.lenght; i>0; i--).
reverse.push(array[i]).
return reverse.join ("");

2 option:

for( var i=0; i < array.lenght; i++){
}
return reverse;
*/


// Excercise 2:


// Excercise 3:


// Excercise 4: