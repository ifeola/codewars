/* 
Problem Statement:

Welcome. In this kata, you are asked to square 
every digit of a number and concatenate them.
For example, if we run 9119 through the function, 
811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 
because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.
Happy Coding!
*/

// Solution One
function squareDigits(digits) {
	if (digits < 10) return digits * digits;
	let newDigits = String(squareDigits(Math.floor(digits / 10)));
	return Number(newDigits + (digits % 10) * (digits % 10));
}

let result = squareDigits(3212);
console.log(result);

//  9*9 + squareDigits(9119) -> returns String(8111) + 81 = Number(811181)
// Recursive Step: 9*9 + squareDigits(911) -> returns String(811) + 1
// Recursive Step: 1*1 + squareDigits(91) -> returns String(81) + 1
// Base-Case: squareDigits(9) -> returns String(9 * 9)
