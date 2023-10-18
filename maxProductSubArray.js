/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let maxProd = minProd = result = nums[0];

    for(let i = 1; i < nums.length; i++) {

      [maxProd, minProd] = [Math.max(maxProd * nums[i], minProd * nums[i], nums[i]), Math.min(maxProd * nums[i], minProd * nums[i], nums[i])];

        result = Math.max(maxProd, result);

    }

    return result;
    
};