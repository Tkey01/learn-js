/*
  Given a string s, find the length of the longest substring without repeating characters.
*/

const lengthOfLongestSubstring = (s) => {
  let temp = {}
  let i = 0
  let count = 0

  while (s[i]) {
    if (temp[s[i]]) {
      count = Math.max(count, Object.keys(temp).length)
      temp = {}
      const lastIndex = s.lastIndexOf(s[i], i - 1)
      i = lastIndex
    } else {
      temp[s[i]] = true
    }
    i++
  }

  count = Math.max(count, Object.keys(temp).length)

  return count
}

let s = 'abcabcbb'
let res = lengthOfLongestSubstring(s)
console.log(res)
