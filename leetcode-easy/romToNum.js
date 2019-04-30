/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const numArr = [...s];
    const romanNums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    return numArr.reduce((total, num, index) => {
        return romanNums[num] < romanNums[numArr[index + 1]] ? total - romanNums[num] : total + romanNums[num]
    }, 0)
};