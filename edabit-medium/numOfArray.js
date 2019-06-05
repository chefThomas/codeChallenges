// https://edabit.com/challenge/TwJghdCGSbDywLZz7
//  Return the total number of arrays inside a given array.

function numOfSubArrays(arr) {
	return arr.reduce((tot, el) => Array.isArray(el) ? tot + 1 : tot + 0, 0);
}