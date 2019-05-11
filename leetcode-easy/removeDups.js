/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let el of nums) {
        while(nums.indexOf(el) != nums.lastIndexOf(el)){
          nums.splice(nums.lastIndexOf(el), 1);
        }
    }
    return nums.length;
};