const nums = [2, 4, 7, 8];
const target = 10;
let vals = {};
function twoSum(nums, target) {
  let vals = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in vals) {
      return [vals[target - nums[i]], i];
    } else {
      vals[nums[i]] = i;
    }
  }
  return [];
}
console.log(twoSum(nums, target));
console.log()