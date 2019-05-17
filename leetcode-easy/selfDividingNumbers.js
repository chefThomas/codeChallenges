/**
 * https://leetcode.com/problems/self-dividing-numbers/
 * A self dividing number is one where each digit is a factor of the whole. Function returns array of self dividing numbers
 * in range bounded by left and right, inclusive
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function(left, right) {

    const output = [];
    
    // self dividing helper
    function allFactor(numStr){
        return numStr.split('').every(num => numStr % num === 0)
    }
    
    // loop through range and push to output
    for(let i = left; i <= right; i++){
        const numToString = i.toString(10);
        if(!numToString.includes('0')){
            if(allFactor(numToString)){
                output.push(+numToString)
            }
        }
    }
    return output;
};