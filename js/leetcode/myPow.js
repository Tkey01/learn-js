/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let res = x

  if (x === 1) {
    return 1
  }

  if (n === 0) {
    return 1
  }

  if (n > 0) {
    for (let i = 1; i < n; i++) {
      res *= x
    }
  } else {
    res = res / x

    for (let i = 0; i < n * -1; i++) {
      res /= x
    }
  }

  return res
}

console.log(myPow(1, -2147483648))
