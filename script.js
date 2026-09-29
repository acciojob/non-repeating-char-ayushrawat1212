function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

	// Step 1: Count the frequency of each character
	for(let i = 0; i < str.length; i++) {

		let char = str[i];
		charCount[char] = (charCount[char] || 0) + 1;
	}

	// Step 2: Find the first character that appears exactly once
	for(let i = 0; i < str.length; i++) {
		let char = str[i];
		if(charCount[char] === 1) {
			return char;
		}
	}

	// Return null if all characters are repeated or string is empty
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

