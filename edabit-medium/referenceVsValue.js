// https://edabit.com/challenge/3jZyJTfsXTXXwAQkA
// Create a function that returns true if two arrays contain identical values, and false otherwise.

function checkEquals(arr1, arr2) {
	for(let i in arr1){
		if(arr1[i] != arr2[i]) {
			return false;
		}
	}
	return true;
}