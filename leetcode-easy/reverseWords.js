/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/
 * @param {string} s
 * @return {string}
 */

ocnst reverseWords = function(s) {
    return s
            .split(' ')
            .map(word => word.split('').reverse().join(''))
            .join(' ');
