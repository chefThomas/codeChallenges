/**
 * https://edabit.com/challenge/Me6dgybsZshsdXTQt
 * 
 * Write a function that reverses the subarray between the start and end index (inclusive). 
 * The rest of the array should be kept the same.
 * 
*/

function rangedReversal(arr, start, end) {
    const revArr = arr.splice(start, end + 1 - start).reverse();
    arr.splice(start, 0, ...revArr)
    return arr;
}