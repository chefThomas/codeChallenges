/**
 * https://leetcode.com/submissions/detail/220062894/
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParity = function (A) {
  let output = [];
  for (let num of A) {
    if (num % 2 === 0) {
      output.unshift(num)
    } else {
      output.push(num)
    }
  }
  return output;
};