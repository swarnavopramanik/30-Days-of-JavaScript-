/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function(nums, fn, init) {
    let add = init;
  for (let i = 0; i < nums.length; i++) {
    add = fn(add, nums[i]);
  }
  return add;
};
