
/**
 * https://leetcode.com/problems/count-and-say/
 * generate nth term in 'count and say'. 1 -> 11 -> 21 -> 1211 -> 111221 -> ... 
 * @param {number} n
 * @return {string}
 */

const countAndSay = function(n) {
    
    if(n === 1) return '1';

    let output = '1';
    
    for(let i = 0; i < n - 1; i++){
        output = rep(output);
    }

    function rep(str) {
        
        let trans = ''
        let count = 1;

        for(let i = 0; i < str.length; i++) {
            if(str[i] === str[i + 1]){
                count++;
            } else {
                trans = trans + count.toString(10) + str[i];
                count = 1;
            }
        }
        return trans;
    }

    return output;
};