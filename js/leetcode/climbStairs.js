/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memoPaths = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    memoPaths[i] = memoPaths[i - 2] + memoPaths[i - 1]
  }
  return memoPaths[n]
}

console.log(climbStairs(4))
