/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n^2) time complexity
const twoSum = (nums, target) => {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    res.push(i)
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(j)
        return res
      }
    }
    res.pop()
  }
}

// O(n) time complexity + O(n) memory
const twoSum2 = (nums, target) => {
  let hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    const value1 = nums[i]
    const value2 = target - value1

    if (value2 in hashmap) {
      return [i, hashmap[value2]]
    }
    hashmap[value1] = i
  }
}
