/**
 * https://leetcode.com/problems/implement-strstr/
 * Return the index of the first occurrence of needle in haystack, 
 * or -1 if needle is not part of haystack. Return 0 if needle is empty string
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    
    const firstLetterNeedle = needle[0];
    if(!needle) return 0;

    for(let h = 0; h < haystack.length; h++){
        if(firstLetterNeedle === haystack[h]) {
           if(haystack.slice(h, h + needle.length) === needle){
               return h;
           } else {  
               continue;
           }
        }
    }
    return -1;
}