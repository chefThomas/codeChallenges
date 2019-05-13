// https://leetcode.com/problems/hamming-distance/
/**
 * 
 * The Hamming distance between two integers is the 
 * number of positions at which the corresponding bits are different.
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xBinary = (x).toString(2);
    let yBinary = (y).toString(2);

    let distance = 0;

    const lenDiff = xBinary.length - yBinary.length;

    if(lenDiff < 0) {
        xBinary = '0'.repeat(Math.abs(lenDiff)) + xBinary;
    }

    if(lenDiff >= 1) {
        yBinary = '0'.repeat(lenDiff) + yBinary;
    }

    for(let i = 0; i < xBinary.length; i++){
        if(xBinary[i] != yBinary[i]){
            distance++;
        }
    }
    return distance;
};