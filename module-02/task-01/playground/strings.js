console.log(`starting javascript`);

// Excercise 1:  Write a JavaScript function that reverses a number.

function reverseString(input) {
	var string = "" + input;
	var array = input.split("");
	var reverse = [];
	for (var i = array.length; i >= 0; i--) {
		reverse.push(array[i]);
	}
	return reverse.join("");
}
console.log(reverseString("ESCRIBIR"))


/* puede ser en reversa como: for(var i - array.lenght; i>0; i--).
reverse.push(array[i]).
return reverse.join ("");

2 option:

for( var i=0; i < array.lenght; i++){
}
return reverse;
*/


// Excercise 2:

function sortAlphabetically(input) {
	var string = "" + input;
	var array = string.split("");
	return array.sort().join('');
}

console.log(sortAlphabetically("webmaster"));

// Excercise 3:

function capitalCase(string) {
	var result = string.split(" ").map((term) => {
		return term.charAt(0).toUpperCase() + term.slice(1).toLowerCase();
	}).join(" ");
	return result;
}

console.log(capitalCase("prince of persia"))

// Excercise 4:

function longWord(string) {
	var array = string.split(" ");
	var counter = 0;
	var longWord = "";
	for ( var i = 0; i < array.length; i++) {
		if (array[i].length > counter) {
			counter = array[i].length;
			longWord = array[i];
		}
	}
	return longWord;
}

console.log(longWord("Web Development Tutorial"))