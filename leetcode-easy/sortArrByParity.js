/**
 * https://leetcode.com/submissions/detail/220062894/
 * sort array A into even int first then odds
 * @param {number[]} A
 * @return {number[]}
 */

const sortArrayByParity = function (A) {
  return A.sort((a, b) => a % 2  - b % 2)
};