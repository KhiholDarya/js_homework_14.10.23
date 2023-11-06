
/*
1. Given a string:
a. count how many words it contains
b. count how many letter “A”  is in it
c. display longest word
d. display how many words of length same as the longest is in the string

Examples:
“This is an example.”
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
*/


let countOfALetter = 0;
let lettersCount = 0;
let longestWord = '';
let countOfLongWords = 0;
const countWords = function(str){
	const words = str.toLowerCase().split(" ");
	console.log(words.length);
	for( let i = 0; i < words.length; i++){
		if (words[i].includes('a')){
			countOfALetter++;
		}
		if (words[i].endsWith(',') || words[i].endsWith('.')){
			words[i] = words[i].slice(0, -1);
		}

		if (words[i].length > lettersCount){
			lettersCount = words[i].length;
			longestWord = words[i];
		}

	}
	for( let i = 0; i < words.length; i++){
		if(words[i].length === lettersCount && words[i] !== longestWord){
				countOfLongWords++;
			}
		}
	console.log(countOfALetter);
	console.log(longestWord);
	console.log(countOfLongWords);
}

countWords('This is an example.');
countWords('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');



/*
2.Gene finder - file: brca1.json - augment gene finder by:
a.Displaying number of all genes
b.Displaying length of longest and shortest gene
*/



// 2.Mario - Augment simple version to print out a whole pyramid like this:

let height = 8;

for(let i = 1; i <= 8; i++){
	let hashesCount = i;
	let spacesCount = height - i;
	let hashes = "";

	for( let j = 0; j < hashesCount; j++){
		hashes += "#";
	}
	let spaces = '';
	for( let k = 0; k < spacesCount; k++){
		spaces += " ";}
	console.log(spaces + hashes + " " + hashes + spaces);
}


/*
3.Credit Card - write a program that will tell if the credit card number is valid and what type of card it is (American Express / MasterCard / Visa)
a.For card number validation - Luhn’s Algorithm is used (https://en.wikipedia.org/wiki/Luhn_algorithm)
b.Assume:
i.All American Express numbers start with 34 or 37; 
ii.MasterCard numbers start with 51, 52, 53, 54, or 55; 
iii.All Visa numbers start with 4
iv.American Express uses 15-digit numbers
v.MasterCard uses 16-digit numbers
vi.Visa uses 13- and 16-digit numbers
c.Display either card type or INVALID

*/

function checkLuhn(ccn) {
	const ccnS = ccn.toString();
	let sum = 0;
	const parity = (ccnS.length) % 2;
	for (let i = 0; i < ccnS.length; i += 1) {
	  let digit = Number(ccnS[i]);
	  if (i % 2 === parity) {
		 digit *= 2;
		 if (digit > 9) {
			digit -= 9;
		 }
	  }
	  sum += digit;
	}
	  if (Number(sum % 10) === 0){
		console.log(`${ccn} card is valid!`);
			if(ccnS.length === 15 && ccnS.startsWith(37) || ccnS.startsWith(34)){
				console.log(`${ccn} card is type of American Express!`);
		}
		else if(ccnS.length === 16 && ccnS.startsWith(51) || ccnS.startsWith(52) || ccnS.startsWith(53) || ccnS.startsWith(54) || ccnS.startsWith(55)){
				console.log(`${ccn} card is type of Master Card!`);
		}
		else if(ccnS.length === 13 || ccnS.length === 16 && ccnS.startsWith(4)){
			console.log(`${ccn} card is type of Visa!`);
		}
	}
	else{
		console.log(`${ccn} card is not valid!`);
	}
	return sum;
 }

checkLuhn(430000000000077);
checkLuhn(378282246310005);
checkLuhn(342998675211009);
checkLuhn(5555555555554444);
checkLuhn(4111111111111111);
checkLuhn(4222222222222);

