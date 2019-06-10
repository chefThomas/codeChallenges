// https://edabit.com/challenge/DmKPX7XLSTFPBxysD
// Create a function that takes a string as the first argument, and a (string) 
// specification as a second argument. If the specification is "word", return a 
// string with each word reversed while maintaining their original order. 
// If the specification is 'sentence', reverse the order of the words in the 
// string, while keeping the words intact.

function flip(str, spec) {
	if(spec === 'sentence'){
		return str.split(' ').reverse().join(' ')
	} else {
		return str.split(' ')
		  .map(word => { return word.split('').reverse().join('')}).join(' ')
	}
}
