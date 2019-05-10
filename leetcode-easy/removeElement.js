// https://leetcode.com/problems/remove-element/submissions/
/**
 * remove element val in place array nums
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    while(nums.includes(val)){
        let spliceIndex = nums.indexOf(val)
        nums.splice(spliceIndex, 1);
    }

};