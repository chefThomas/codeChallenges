/**
 * https://leetcode.com/problems/fibonacci-number/
 * classic fibonacci 
 * 
 * @param {number} N
 * @return {number}
 */
var fib = function(n) {
    // base
    if(n < 2) return n;

    // recurse
    n = n - 1;
    return fibonacci(n) + fibonacci(n - 1);
};