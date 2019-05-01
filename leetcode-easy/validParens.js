/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let strArr = [...s];

  for (let char of s) {
    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
      strArr.shift()
    }

    if (char === ']' && (stack[stack.length - 1] === '[')) {
      stack.pop();
      strArr.shift()
    }

    if (char === ')' && (stack[stack.length - 1] === '(')) {
      stack.pop();
      strArr.shift()
    }

    if (char === '}' && (stack[stack.length - 1] === '{')) {
      stack.pop();
      strArr.shift()
    }
  }

  return !strArr.length && !stack.length;
};