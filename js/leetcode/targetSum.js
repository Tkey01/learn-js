/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var findTargetSumWays = function (nums, target) {
  let count = 0

  const traversal = (currNums, sum) => {
    if (!currNums.length) {
      if (sum === target) {
        count++
      }

      return
    }

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        traversal(currNums.slice(0, -1), sum + currNums[currNums.length - 1])
      } else {
        traversal(currNums.slice(0, -1), sum - currNums[currNums.length - 1])
      }
    }
  }

  traversal(nums, 0)

  return count
}

console.log(
  findTargetSumWays(
    [
      40, 19, 30, 48, 8, 50, 13, 31, 29, 38, 35, 31, 40, 47, 7, 16, 31, 33, 45,
      6,
    ],
    49,
  ),
)
