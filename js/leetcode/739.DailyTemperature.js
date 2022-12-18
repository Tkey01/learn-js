/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (t) {
  let res = []
  for (let i = 0; i < t.length; i++) {
    res[i] = 0
    for (let j = i + 1; j < t.length; j++) {
      if (t[i] < t[j]) {
        res[i] = j - i
        break
      }
    }
  }
  return res
}
