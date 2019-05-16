/**
 * https://leetcode.com/problems/search-insert-position/
 * Given a sorted array and a target value, return the 
 * index if the target is found. If not, return the index 
 * where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {

    if(target > nums[-1]) return nums.length - 1;
    
    let i = 0;

    while(nums[i] < target) {
        i++
    }
    
    return i;
};