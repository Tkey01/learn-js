/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newStr = s.replace(/[^a-zA-Z0-9]/gm, '')
  newStr = newStr.toLowerCase()

  for (let i = 0; i + 1 <= Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('.,'))
