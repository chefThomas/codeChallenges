/**
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 * @param {number[]} A
 * @return {number}
 */


var repeatedNTimes = function (A) {
  for (let i = 0; i < A.length - 1; i++) {
    if (A.slice(i + 1).includes(A[i])) {
      return A[i]
    }
  }
};