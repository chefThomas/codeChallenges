// https://leetcode.com/problems/valid-palindrome/submissions/
// Given a string, determine if it is a palindrome, considering only 
// alphanumeric characters and ignoring cases.

const isPalindrome = function(s) {
    
    const clean = s.replace(/\W/g, '').toLowerCase();
    const reverse = clean.split('').reverse().join('');

    return reverse === clean;

};