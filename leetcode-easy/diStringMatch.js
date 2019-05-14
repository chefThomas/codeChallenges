/**
 * https://leetcode.com/problems/di-string-match/
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = function(S) {

    let sortArr = [];
    let output = [];

    for(let i = 0; i <= S.length; i++){
        sortArr.push(i);
    }

    for(let char of S) {
        if(char === "D") {
            output.push(sortArr.pop())
        } else {
            output.push(sortArr.shift())
        }
    }
    
    output.push(sortArr.pop())
    return output;
}