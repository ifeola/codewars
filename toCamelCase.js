/* 
Problem Statement:

Complete the method/function so that it converts dash/underscore delimited words into
 camel casing. The first word within the output should be capitalized only if the
original word was capitalized (known as Upper Camel Case, also often referred to as
Pascal case). The next words should be always capitalized. 

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

// Solution One - With Loop
// Big O - O(n)
function toCamelCase(str) {
	if (str.length < 1) return str;
	let word = "";
	word = word + str[0];
	for (let index = 1; index < str.length; index++) {
		if (str[index] == "-" || str[index] == "_") continue;
		if (str[index - 1] == "-" || str[index - 1] == "_") {
			let capitals = str[index].toUpperCase();
			word = word + capitals;
			continue;
		}

		word = word + str[index].toLowerCase();
	}
	return word;
}

// Solution Two
function toCamelCase(str) {
	if (str.length < 2) return str;
	let newstr = "";
	newstr = newstr + str[0];
	if (str[0] == "-" || str[0] == "_") {
		return str[0 + 1].toUpperCase() + toCamelCase(str.slice(2));
	} else {
		return newstr + toCamelCase(str.slice(1));
	}
}

const result = toCamelCase("");
console.log(result);
